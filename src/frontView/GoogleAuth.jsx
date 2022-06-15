import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../Actions";
import { signOut} from '../Actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:Auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "871225813464-e1abdfloou92j3e93qqc0lclu087pvki.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());

          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
    }
  };

onSignInClick = () =>{
    this.auth.onSignIn(this.auth.currentUser.get().getId());
}

onSignOutClick = () => {
    this.auth.onSignOut();
}

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (!this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignInClick}
          className="btn btn-danger text-white"
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignOutClick}
          className="btn btn-danger text-white"
        >
          Sign in with google
        </button>
      );
    }
  };
  render() {
    return <div></div>;
  }
}

const mapSateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapSateToProps, { signIn, signOut })(GoogleAuth);
