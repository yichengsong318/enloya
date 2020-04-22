import React, {Component} from 'react';
import { connect } from "react-redux";
import io from "socket.io-client";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import { FormInput } from '../../shared/FormElement';
import { updateData, readData, loadMe } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import { Modal } from "react-bootstrap";
import UserList from "./components/UserList";
import { fetchUsers } from "./requests";
import ChatBox from "./components/ChatBox";

import AlertArea from '../../components/AlertArea';
import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer/Footer';
import FooterData from '../../components/Footer/FooterData';

import { apiConfig } from '../../constants/defaultValues';

const DUMMY_USERS = [
    {
      id:  1,
      firstname: "Perborgen DOE",
    },
    {
      id:  2,
      firstname: "Janedoe YOAN",
    }
  ]
export class Conversations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInModalShow: false,
      users: DUMMY_USERS, // Avaiable users for signing-in
      userChatData: DUMMY_USERS, // this contains users from which signed-in user can chat and its message data.
      user: null, // Signed-In User
      selectedUserIndex: null,
      showChatBox: false, // For small devices only
      showChatList: true, // For small devices only
      error: false,
      errorMessage: ""
    }
  }

  componentDidMount() {
    this.setState({user: this.props.userInfo})
    this.initAxios();
    this.initSocketConnection();
    // fetchUsers().then(users => this.setState({ users }));
    this.setupSocketListeners();
  }

  initSocketConnection = () => {
    this.socket = io.connect(apiConfig);
  }

  initAxios = () => {
    axios.interceptors.request.use(
      config => {
        this.setState({ loading: true });
        return config;
      },
      error => {
        this.setState({ loading: false });
        this.setState({
          errorMessage: `Couldn't connect to server. try refreshing the page.`,
          error: true
        });
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      response => {
        this.setState({ loading: false });
        return response;
      },
      error => {
        this.setState({ loading: false });
        this.setState({
          errorMessage: `Some error occured. try after sometime`,
          error: true
        });
        return Promise.reject(error);
      }
    );
  }

  onClientDisconnected = () => {
    NotificationManager.error(
      "Connection Lost from server please check your connection.",
      "Error!"
    );
  }

  onReconnection = () => {
    if (this.state.user) {
      this.socket.emit("sign-in", this.state.user);
      NotificationManager.success("Connection Established.", "Reconnected!");
    }
  }

  setupSocketListeners = () => {
    this.socket.on("message", this.onMessageRecieved.bind(this));
    this.socket.on("reconnect", this.onReconnection.bind(this));
    this.socket.on("disconnect", this.onClientDisconnected.bind(this));
  }

  onMessageRecieved = (message) => {
    let userChatData = this.state.userChatData;
    let messageData = message.message;
    let targetId;
    if (message.from === this.state.user.id) {
      messageData.position = "right";
      targetId = message.to;
    } else {
      messageData.position = "left";
      targetId = message.from;
    }
    let targetIndex = userChatData.findIndex(u => u.id === targetId);
    if (!userChatData[targetIndex].messages) {
      userChatData[targetIndex].messages = [];
    }
    if (targetIndex !== this.state.selectedUserIndex) {
      if (!userChatData[targetIndex].unread) {
        userChatData[targetIndex].unread = 0;
      }
      userChatData[targetIndex].unread++;
    }
    userChatData[targetIndex].messages.push(messageData);
    this.setState({ userChatData });
  }

  onUserClicked = (e) => {
    let user = e.user;
    this.socket.emit("sign-in", user);
    let userChatData = this.state.users.filter(u => u.id !== user.id);
    this.setState({ user, signInModalShow: false, userChatData });
  }

  onChatClicked = (e) => {
    this.toggleViews();
    let users = this.state.userChatData;
    for (let index = 0; index < users.length; index++) {
      if (users[index].id === e.user.id) {
        users[index].unread = 0;
        this.setState({ selectedUserIndex: index, userChatData: users });
        return;
      }
    }
  }

  createMessage = (text) => {
    console.log('message receiving enclenched',text);
    console.log('Current user infos this.state.user.id', this.state.user.id);
    console.log('this.state.userChatData[this.state.selectedUserIndex].id', this.state.userChatData[this.state.selectedUserIndex].id);
    console.log('this.state.user.id', this.state.user.id);
    let message = {
      to: this.state.userChatData[this.state.selectedUserIndex].id,
      message: {
        type: "text",
        text: text,
        date: +new Date(),
        className: "message"
      },
      from: this.state.user.id
    };
    console.log('messagemessagemessage', message);
    this.socket.emit("message", message);
  }

  toggleViews = () => {
    this.setState({
      showChatBox: !this.state.showChatBox,
      showChatList: !this.state.showChatList
    });
  }


  render () {
    console.log('this.state.users', this.state.users);
    console.log('this.state single user', this.state.user);
    console.log('this.props.users', this.props.userInfo);
    return (
      <div className="App">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
        <div className="h-100 container mb-5 mt_75">
          <AlertArea/>
          <h1 className="h3 my-5 text-bold">Messages</h1>
          <div className="row px-3">
            <div className="col-sm-3 sidemenu pt-3">
              <UserList
                userData={this.state.userChatData}
                onChatClicked={this.onChatClicked.bind(this)}
              />
            </div>
            <div className="col-sm-9 bg-white px-0">
              <div className="h-100">
                <ChatBox
                    signedInUser={this.state.user}
                    onSendClicked={this.createMessage.bind(this)}
                    onBackPressed={this.toggleViews.bind(this)}
                    targetUser={
                      this.state.userChatData[this.state.selectedUserIndex]
                    }
                  />
              </div>
            </div>
          </div>
        </div>
        <Footer FooterData={FooterData} kind="otherPage"/>
      </div>

    );
  }
}

const mapStateToProps = ({ authUser, data }) => {
  const { userType, userInfo, user } = authUser;
  const { languages } = data;

  return { userType, userInfo, user, languages };
};

const mapActionToProps = {
  updateData,
  readData,
  loadMe
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(Conversations));
