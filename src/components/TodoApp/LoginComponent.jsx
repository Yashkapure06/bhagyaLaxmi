import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";
import Button from "@mui/material/Button";
import { Divider, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMsg: false,
    };
    // this.handleUserNameChange = this.handleUserNameChange.bind(this)
    // this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
    //this.ShowInvalidCredentials = this.ShowInvalidCredentials.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  loginClicked() {
    //dummy, dummy
    /*if(){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            //this.props.history.push("/welcome")
            this.props.navigate(`/welcome/${this.state.username}`)
            this.setState({hasLoginFailed : false})
            this.setState({showSuccessMsg : true})
        } else {
            this.setState({hasLoginFailed : true})
            this.setState({showSuccessMsg : false})
        }*/
    AuthenticationService.executeBasicAuthService(
      this.state.username,
      this.state.password
    )
      .then(() => {
        AuthenticationService.registerSuccessfulLogin(
          this.state.username,
          this.state.password
        );
        this.props.navigate(`/welcome/${this.state.username}`);
      })
      .catch(() => {
        this.setState({ hasLoginFailed: true });
        this.setState({ showSuccessMsg: false });
      });
  }

  // handleUserNameChange (event) {
  //     console.log(event.target.value)
  //     this.setState({[event.target.name] : event.target.value})
  // }

  // handlePasswordChange (event) {
  //     console.log(event.target.value)
  //     this.setState({password : event.target.value})
  // }

  render() {
    return (
      <div >
        <center>
        <div
          style={{
            border: "0.5px solid black",
            margin: "50px 20px 25px 20px",
            // width: "100%",
            paddingLeft: 50,
            paddingRight: 50,
            borderRadius: 7,
          }}
        >
          <Typography
            fontWeight={600}
            fontFamily={"BlinkMacSystemFont"}
            variant="h2"
            color="white"
            component="div"
            gutterBottom
            align="center"
            style={{ marginTop: 10 }}
          >
            Login
          </Typography>
          <Divider />
          <div
            style={{
              padding: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
            {this.state.hasLoginFailed && (
              <div className="alert alert-warning">Invalid Credentials</div>
            )}
            {this.state.showSuccessMsg && <div>Login Success</div>}
            {/*<ShowSuccessfulLogin showSuccessMsg={this.state.showSuccessMsg}/>*/}
            <TextField
              required
              id="outlined-name"
              label="User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              style={{ margin: 8}}
            />
            <br />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              style={{ margin: 8 }}
            />
            <br />
            {/* User Name: <input type="text" name = "username" value={this.state.username} onChange = {this.handleChange}/> */}
            {/* Password: <input type="password" name = "password" value={this.state.password} onChange = {this.handleChange}/> */}

            <Button
              variant="contained"
              color="success"
              onClick={this.loginClicked}
              style={{ margin: 8, marginTop: 16, fontWeight: 550 }}
            >
              Login
            </Button>
          </div>
        </div>
        </center>
      </div>
    );
  }
}

// const styles = {
//     TextField : {
//         margin : "10px"
//     }
// }

export default LoginComponent;
