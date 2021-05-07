import { IconButton, Modal, TextField } from "@material-ui/core";
import { getDeviceType, validateInput } from "helpers";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStateValue } from "helpers/StateProvider";
// import axios from "helpers/axios";
import GoogleLogin from "react-google-login";
import { Close } from "@material-ui/icons";
import Alerts from "./Alerts";
import "./LoginModal.css";
import DcrustLogo from "assets/dcrust-logo.jpeg";
import { baseColor } from "styles/base";

const LoginModal = ({ login, handleCloseLogin, toggleDrawer }) => {
  const [, dispatch] = useStateValue();
  const [register, setRegister] = useState(false);
  const [details, setDetails] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [username, setUsername] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [valError, setvalError] = useState(null);

  const handleRegister = () => {
    setRegister(!register);
  };

  useEffect(() => {
    if (valError) {
      setAlertOpen(true);
      setTimeout(() => setAlertOpen(false), 2000);
    } else {
      setDetails(true);
    }
  }, [valError]);

  const handleDetails = (e) => {
    e.preventDefault();
    if (!details) {
      if (username && email && password && confirmPassword) {
        setvalError(
          validateInput({
            username: username,
            pass: password,
            confirm: confirmPassword,
          })
        );
      } else {
        setvalError({
          title: "Missing Input",
          body: "Please fill all fields",
        });
      }
    } else {
      setDetails(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register) {
      if (fname && lname && selectedDate) {
        //request
      } else {
        setvalError({
          title: "Missing Input",
          body: "Please fill all fields",
        });
        setAlertOpen(true);
        setTimeout(() => setAlertOpen(false), 2000);
      }
    }
  };

  const close = () => {
    handleCloseLogin();
    setRegister(false);
    setEmail("");
    setUsername("");
    setfName("");
    setlName("");
    setSelectedDate("");
    setPassword("");
    setDetails(false);
    setConfirmPassword("");
  };

  const responseGoogle = (res) => {
    fetch("/api/register/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tokenId: res.tokenId }),
    })
      .then((res) => res.json())
      .then((parJson) => {
        if (parJson.email) {
          dispatch({
            type: "SET_USER",
            user: {
              id: res.googleId,
              firstName: res.profileObj.givenName,
              lastName: res.profileObj.familyName,
              email: res.profileObj.email,
            },
          });
          handleCloseLogin();
          toggleDrawer();
        } else if (parJson.error) {
          alert("error occured");
        }
      });
  };
  return (
    <>
      <Modal
        open={login}
        onClose={close}
        aria-labelledby="Login Modal"
        aria-describedby="Modal for login and register functionality"
      >
        {
          <ModalContainer>
            <Alerts
              setAlertOpen={setAlertOpen}
              alertOpen={alertOpen}
              type="error"
              title={valError?.title}
              body={valError?.body}
              isVal={true}
            />
            {!register ? (
              <Content>
                <SideBar>
                  <div className="logo">
                    <DcrsutLogoImg src={DcrustLogo} alt="" />
                    <h2>IIC</h2>
                  </div>
                  <div className="links">
                    <p className="sec-link">Don't have an account?</p>
                    <p className="prim-link" onClick={handleRegister}>
                      Sign Up
                    </p>
                  </div>
                </SideBar>
                <div className="box login">
                  <IconButton onClick={close} className="close">
                    <Close />
                  </IconButton>
                  <h1 className="auth-heading">Sign In</h1>
                  <div className="form login-form">
                    <div>
                      <GoogleLogin
                        clientId="269195292319-tpn3nc6dfm6jncjlsd7jp3ogluicr7fb.apps.googleusercontent.com"
                        buttonText="Continue with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        theme="light"
                        cookiePolicy={"single_host_origin"}
                        className="google-login"
                      />
                      <p className="login-alt-text sideline">
                        <span>or login with email</span>
                      </p>
                    </div>

                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" onClick={(e) => handleSubmit(e)}>
                      Sign In
                    </Button>
                  </div>
                </div>
              </Content>
            ) : !details ? (
              <Content>
                <div className="box login">
                  <IconButton onClick={close} className="close">
                    <Close />
                  </IconButton>
                  <h1 className="auth-heading register-head">Sign Up</h1>
                  <div className="form login-form">
                    <div>
                      <GoogleLogin
                        clientId="269195292319-tpn3nc6dfm6jncjlsd7jp3ogluicr7fb.apps.googleusercontent.com"
                        buttonText="Continue with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        theme="light"
                        cookiePolicy={"single_host_origin"}
                        className="google-login"
                      />
                      <p className="login-alt-text sideline">
                        <span>or login with email</span>
                      </p>
                    </div>

                    <Input
                      type="text"
                      placeholder="Username"
                      value={username}
                      name="username"
                      autocomplete="off"
                      onChange={(e) => setUsername(e.target.value)}
                      className="register-input"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      name="email"
                      autocomplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="register-input"
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      autocomplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="register-input"
                    />
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      autocomplete="off"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="register-input"
                    />
                    <Button type="submit" onClick={(e) => handleDetails(e)}>
                      Next
                    </Button>
                  </div>
                </div>
                <SideBar>
                  <div className="logo">
                    <DcrsutLogoImg src={DcrustLogo} alt="" />
                    <h2>IIC</h2>
                  </div>
                  <div className="links">
                    <p className="sec-link">Already have an account?</p>
                    <p className="prim-link" onClick={handleRegister}>
                      Sign In
                    </p>
                  </div>
                </SideBar>
              </Content>
            ) : (
              <Content>
                <div className="box login">
                  <IconButton onClick={close} className="close">
                    <Close />
                  </IconButton>
                  <h1 className="auth-heading register-head">Details</h1>
                  <div className="form login-form">
                    <div>
                      <GoogleLogin
                        clientId="269195292319-tpn3nc6dfm6jncjlsd7jp3ogluicr7fb.apps.googleusercontent.com"
                        buttonText="Continue with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        theme="light"
                        cookiePolicy={"single_host_origin"}
                        className="google-login"
                      />
                      <p className="login-alt-text sideline">
                        <span>or login with email</span>
                      </p>
                    </div>

                    <Input
                      type="text"
                      placeholder="First Name"
                      value={fname}
                      autocomplete="off"
                      name="first"
                      onChange={(e) => setfName(e.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Last Name"
                      autocomplete="off"
                      value={lname}
                      name="last"
                      onChange={(e) => setlName(e.target.value)}
                    />
                    <DOB
                      id="dob"
                      label="DOB"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                    <Button type="submit" onClick={(e) => handleSubmit(e)}>
                      Sign Up
                    </Button>
                  </div>
                </div>
                <SideBar>
                  <div className="logo">
                    <DcrsutLogoImg src={DcrustLogo} alt="" />
                    <h2>IIC</h2>
                  </div>
                  <div className="links">
                    <p className="sec-link">Already have an account?</p>
                    <p className="prim-link" onClick={handleRegister}>
                      Sign In
                    </p>
                  </div>
                </SideBar>
              </Content>
            )}
          </ModalContainer>
        }
      </Modal>
    </>
  );
};

export default LoginModal;

const DcrsutLogoImg = styled.img`
  border-radius: 5px;
  margin-bottom: 20px;
  border: 1px solid ${baseColor.onPrimaryLite};
  box-shadow: 0px 0px 10px ${baseColor.onBackgroundLite};
`;

const ModalContainer = styled.div`
  position: "absolute";
  width: 100vw;
  height: 100vh;
  margin: auto;
  background-color: #f6f6f6;
`;

const Content = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  height: 100vh;
  flex: 3;
  background-color: #034b94;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  padding: 50px 30px;
  flex: 5;
  display: flex;
  height: 85%;
  flex-direction: column;
  justify-content: space-between;
  color: #040016;
`;

const Input = styled.input`
  width: 40%;
  height: 50px;
  padding-left: 30px;
  border: 0.3px #eee solid;
  border-radius: 5px;
  outline: none;
  box-shadow: 12px 12px 25px rgb(0 0 0 / 6%);
  margin-bottom: 1rem;
  margin-top: 2rem;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
`;
const Button = styled.button`
  margin-top: 1.5rem;
  width: 20%;
  height: 7vh;
  cursor: pointer;
  border-radius: 100px;
  border: none;
  background-color: #034b94;
  font-size: 1rem;
  font-weight: 500;
  color: #f6f6f6;
  letter-spacing: 0.5px;
  font-family: Poppins, Verdana sans-serif;
  :hover {
    background-color: #004182;
  }
`;

const Register = styled.span`
  cursor: pointer;
  padding-left: 10px;
  :hover {
    color: #fff;
  }
`;

const Head = styled.p`
  justify-content: space-between;
  display: flex;
`;

const DOB = styled(TextField)`
  && {
    color: white;
    width: 40%;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
