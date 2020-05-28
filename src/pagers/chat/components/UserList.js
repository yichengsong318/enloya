import React, { Component } from "react";
import { ChatList } from "react-chat-elements";
import { FormControl } from "react-bootstrap";
/**
 *
 * Renders user list
 *
 * Used on both places Sign-in modal and as ChatList
 */

export default class UserList extends Component {

  state = {
    userData: [],
    searchQuery: null
  };

  componentDidMount() {
  }

  searchInput(e) {
    let value = e.target.value;
    let searchQuery = null;
    if (value) {
      searchQuery = value;
    }
    this.setState({ searchQuery });
  }
  /**
   *
   * Implement filter logic on basis of search query.
   */
  getFilteredUserList() {
    if (this.state.searchQuery) {
      let list = [];

      if (this.props.lawyers) {
        list.push(...this.props.lawyers);
      }

      if (this.props.clients) {
        list.push(...this.props.clients);
      }

      return list.filter(user =>
        (user.firstname + ' ' + user.lastname).toLowerCase().includes(this.state.searchQuery.toLowerCase())
      );
    } else {
      return this.props.chatList.filter(cl => cl.messages && cl.messages.length);
    }
  }
  render() {
    let users = this.getFilteredUserList();
    return (
      <div>
        <div>
          <FormControl
            type="text"
            placeholder="Search for a user here..."
            onInput={this.searchInput.bind(this)}
            className="bg-transparent"
          />
        </div>
        {users.length ? (
          <ChatList
            className={!this.props.showSignInList ? "chat-list" : "user-list"}
            dataSource={users.map((f, i) => {
              let date = null;
              let subtitle = "";
              if (
                !this.props.showSignInList &&
                f.messages &&
                f.messages.length
              ) {
                let lastMessage = f.messages[f.messages.length - 1];
                date = new Date(lastMessage.timeStamp);
                subtitle =
                  (lastMessage.position === "right" ? "You: " : f.firstname + " " + f.lastname + ": ") +
                  lastMessage.text;
              }
              return {
                avatar: f.profilePic || require(`../static/images/avatar/none.svg`),
                alt: f.firstname + ' ' + f.lastname,
                title: f.firstname + ' ' + f.lastname,
                subtitle: subtitle,
                date: date,
                unread: f.unread,
                user: f
              };
            })}
            onClick={
              !this.props.showSignInList
                ? this.props.onChatClicked
                : this.props.onUserClicked
            }
          />
        ) : (
          <div className="text-center no-users">No users to show.</div>
        )}
      </div>
    );
  }
}
