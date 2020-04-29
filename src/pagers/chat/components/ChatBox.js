import React, { Component } from "react";
import {
  Button,
  FormGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import {
  MessageList,
  Navbar as NavbarComponent,
  Avatar
} from "react-chat-elements";

/**
 *
 * ChatBox Component
 *
 * displays all the messages from chat history.
 * renders message text box for input.
 */

export default class ChatBox extends Component {
  state = {
    messageText: ""
  };
  /**
   *
   * Sends a message only if it is not falsy.
   */
  onSendClicked() {
    if (!this.state.messageText) {
      return;
    }
    this.props.onSendClicked(this.state.messageText);
    this.setState({ messageText: "" });
  }
  onMessageInputChange(e) {
    this.setState({ messageText: e.target.value });
  }
  /**
   *
   * @param {KeyboardEvent} e
   *
   * listen for enter pressed and sends the message.
   */
  onMessageKeyPress(e) {
    if (e.key === "Enter") {
      this.onSendClicked();
    }
  }

  render() {
    return (
      <div>
        {this.props.targetUser ? (
          <div>
            <NavbarComponent
              left={
                <div>
                  <Avatar
                    src={this.props.targetUser.profilePic || require(`../static/images/avatar/1.jpg`)}
                    alt={"logo"}
                    size="large"
                    type="circle flexible"
                  />
                  <p className="navBarText">{this.props.targetUser.firstname} {this.props.targetUser.lastname}</p>
                </div>
              }
            />
            <MessageList
              className="message-list"
              lockable={true}
              toBottomHeight={"100%"}
              dataSource={this.props.targetUser.messages}
            />
            <FormGroup className="border-0 px-3">
              <InputGroup>
                <FormControl
                  type="text"
                  value={this.state.messageText}
                  onChange={this.onMessageInputChange.bind(this)}
                  onKeyPress={this.onMessageKeyPress.bind(this)}
                  placeholder="Type a message here (Limit 3000 characters)..."
                  ref="messageTextBox"
                  className="messageTextBox border-radius4"
                  maxLength="3000"
                  autoFocus
                />
                <Button
                  disabled={!this.state.messageText}
                  className="sendButton ml-2"
                  onClick={this.onSendClicked.bind(this)}
                >
                  Send
                </Button>
              </InputGroup>
            </FormGroup>
          </div>
        ) : (
          <div className="p-3">
              <h1>Hello, {(this.props.signedInUser || {}).firstname}!</h1>
              <p>Select a user from the left menu to start a chat.</p>
          </div>
        )}
      </div>
    );
  }
}
