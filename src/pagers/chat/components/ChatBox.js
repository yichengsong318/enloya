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
  Avatar,
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

    console.log('this.props.targetUser.messages', this.props);

    return (
      <div>
        {this.props.targetUser ? (
          <div>
            <NavbarComponent
              left={
                <div>
                  <Avatar
                    src={this.props.targetUser.profilePic || require(`../static/images/avatar/none.svg`)}
                    alt={"logo"}
                    size="large"
                    type="circle flexible"
                  />
                  <p className="navBarText">{this.props.targetUser.firstname} {this.props.targetUser.lastname}</p>
                </div>
              }
            />
            <MessageList
              ref={(node) => {
                if (node && node.mlistRef) {
                  node.setState({ scrollBottom: node.getBottom(node.mlistRef) }, node.checkScroll.bind(node));
                }
              }}
              className="message-list"
              lockable={true}
              dataSource={this.props.targetUser.messages}
              downButton={true}
            />
            <FormGroup className="border-0 px-3">
              <InputGroup>
                <FormControl
                  type="textarea"
                  rows={5}
                  value={this.state.messageText}
                  onChange={this.onMessageInputChange.bind(this)}
                  onKeyPress={this.onMessageKeyPress.bind(this)}
                  ref="messageTextBox"
                  className="messageTextBox border-radius4"
                  maxLength="3000"
                  autoFocus
                />
                <Button
                  disabled={!this.state.messageText}
                  className="sendButton ml-2 bg-yellow"
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
