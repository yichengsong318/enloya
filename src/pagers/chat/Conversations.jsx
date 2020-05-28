import React, {Component} from 'react';
import { connect } from "react-redux";
import io from "socket.io-client";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import { Avatar } from "react-chat-elements";
import { Link } from 'react-router-dom';
import { updateData, readData, loadMe } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import UserList from "./components/UserList";
import ChatBox from "./components/ChatBox";

import AlertArea from '../../components/AlertArea';
import CustomNavbar from '../../components/CustomNavbar';

import { apiConfig } from '../../constants/defaultValues';


export class Conversations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInModalShow: false,
      users: [], // Avaiable users for signing-in
      userChatData: [], // this contains users from which signed-in user can chat and its message data.
      user: null, // Signed-In User
      selectedUserIndex: null,
      showChatBox: false, // For small devices only
      showChatList: true, // For small devices only
      error: false,
      errorMessage: ""
    }
  }

  componentDidMount() {
    this.props.loadMe(() => {
      this.setState({user: this.props.userInfo})
      this.initAxios();
      this.initSocketConnection();
      this.setupSocketListeners();
    });
    // fetchUsers().then(users => this.setState({ users }));
    this.props.readData('lawyers',{}, () => {
      this.props.readData('clients', {}, () => {
        this.setState({userChatData: [...this.props.lawyers, ...this.props.clients]})
      });
    });
  }

  initSocketConnection = () => {
    console.log('connected....', this.socket && this.socket.id);
    this.socket = io.connect(apiConfig.apiURL);
    this.socket.on('connect', () => {
      this.socket.emit("sign-in", this.state.user.id);
      console.log(this.socket.id); // 'G5p5...'
    });
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
    this.socket.disconnect();
    // NotificationManager.error(
    //   "Connection Lost from server please check your connection.",
    //   "Error!"
    // );
  }

  onReconnection = () => {
    if (this.state.user) {
      this.socket.emit("sign-in", this.state.user.id);
      NotificationManager.success("Connection Established.", "Reconnected!");
    }
  }

  setupSocketListeners = () => {
    this.socket.on("message", this.onMessageRecieved.bind(this));
    this.socket.on("messages", this.onMessageLoaded.bind(this));
    // this.socket.on("reconnect", this.onReconnection.bind(this));
    // this.socket.on("disconnect", this.onClientDisconnected.bind(this));
  }

  onMessageRecieved = (message) => {
    let userChatData = this.state.userChatData;
    let messageData = message.message;
    messageData.id = message.id;
    messageData.read = message.read;
    messageData.to = message.to;

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

      if (!message.read && message.to === this.state.user.id) {
        userChatData[targetIndex].unread++;
      }
    } else {
      if (!message.read && message.to === this.state.user.id) {
        this.socket.emit("read", messageData.id);
      }
    }

    userChatData[targetIndex].messages.push(messageData);
    this.setState({ userChatData });
  }

  onMessageLoaded = (messages) => {
    let userChatData = this.state.userChatData;

    userChatData.forEach(uc => {
      uc.messages = [];
      uc.unread = 0;
    });

    messages.forEach(message => {
      let messageData = message.message;
      messageData.id = message.id;
      messageData.read = message.read;
      messageData.to = message.to;
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

        if (!message.read && message.to === this.state.user.id) {
          userChatData[targetIndex].unread++;
        }
      }

      userChatData[targetIndex].messages.push(messageData);
    });

    this.setState({ userChatData });
  }

  onUserClicked = (e) => {
    let user = e.user;
    // this.socket.emit("sign-in", user);
    let userChatData = this.state.users.filter(u => u.id !== user.id);
    this.setState({ user, signInModalShow: false, userChatData });
  }

  onChatClicked = (e) => {
    this.toggleViews();
    let users = this.state.userChatData;
    for (let index = 0; index < users.length; index++) {
      if (users[index].id === e.user.id) {
        users[index].unread = 0;
        users[index].messages.forEach(msg => {
          if (!msg.read && msg.to === this.state.user.id) {
            this.socket.emit("read", msg.id);
          }
        });
        // console.log(users[index].messages);
        this.setState({ selectedUserIndex: index, userChatData: users });
        return;
      }
    }
  }

  createMessage = (text) => {
    const fromType = this.state.user.type ? 'client' : 'lawyer';
    const toType = this.state.userChatData[this.state.selectedUserIndex].type ? 'client' : 'lawyer';
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formatedDate = currentDate.toLocaleDateString();
    const combinedHours = `${hours}:${minutes.toString().padStart(2, "0")}`
    const combinedDate = `${combinedHours} on ${formatedDate}`

    let message = {
      to: this.state.userChatData[this.state.selectedUserIndex].id,
      usertype: fromType + '-to-' + toType,
      message: {
        type: "text",
        text: text,
        // date: +d,
        dateString: combinedDate,
        className: "message"
      },
      from: this.state.user.id
    };
    this.socket.emit("message", message);
  }

  toggleViews = () => {
    this.setState({
      showChatBox: !this.state.showChatBox,
      showChatList: !this.state.showChatList
    });
  }

  componentWillUnmount() {
    this.socket.disconnect();
    console.log('byyyyyyeeeeeeeeeeeeeeeeee');
  }


  render () {
    const targetedUser = this.state.userChatData[this.state.selectedUserIndex];
    const userId = targetedUser && targetedUser.id;
    const city = targetedUser && targetedUser.city;
    const country = targetedUser && targetedUser.country;
    const firstName = targetedUser && targetedUser.firstname;
    const lastName = targetedUser && targetedUser.lastname;
    const langs = targetedUser && targetedUser.languages.map((lang, index) => { return (<span className="lang-tag mr-1">{lang.label}</span>) })
    const userType = targetedUser && targetedUser.type;
    const isLawyer = !(userType === 'business' || userType === 'individual');

    return (
      <div className="App">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
        <div className="h-100 mx-5 mb-5 mt_100">
          <AlertArea/>
          <div className="row px-3">
            <div className="col-sm-3 sidemenu pt-3">
              <UserList
                lawyers={this.props.lawyers}
                clients={this.props.clients}
                chatList = {this.state.userChatData}
                onChatClicked={this.onChatClicked.bind(this)}
              />
            </div>
            <div className="col-sm-6 bg-white px-0">
              <div className="h-100">
                <ChatBox
                    onSendClicked={this.createMessage.bind(this)}
                    onBackPressed={this.toggleViews.bind(this)}
                    signedInUser={this.state.user}
                    targetUser={targetedUser}
                  />
              </div>
            </div>
            <div className="col-sm-3 sidemenu pt-3 text-center right-side-menu-img">
            {targetedUser &&(
              <Avatar
                src={targetedUser && targetedUser.profilePic || require(`./static/images/avatar/none.svg`)}
                alt={"logo"}
                size="large"
                type="circle flexible"
              />
            )}
              <div className="targeted-user-fullname">
              {targetedUser ?(
                <>
                  {isLawyer ? (
                    <Link className="text-white" to={"/lawyer-profile/" + userId}>
                      <h3>{`${firstName} ${lastName}`}</h3>
                      <h6 className="text-white">Location: {city}, {country}</h6>
                      <h6 className="text-white">Languages: {langs}</h6>
                    </Link>
                  ): (<>
                    <h3>{`${firstName} ${lastName}`}</h3>
                    <h6 className="text-white">Location: {city}, {country}</h6>
                    <h6 className="text-white">Languages: {langs}</h6>
                  </>)}
                </>
              ): (<></>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, data }) => {
  const { userType, userInfo, user } = authUser;
  const { languages, lawyers, clients } = data;
  return { userType, userInfo, user, languages, lawyers, clients };
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
