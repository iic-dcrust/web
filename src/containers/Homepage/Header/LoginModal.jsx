import { IconButton, MenuItem, Modal, TextField } from "@material-ui/core";
import { getDeviceType, validateDetails, validateInput } from "helpers";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStateValue } from "helpers/StateProvider";
import GoogleLogin from "react-google-login";
import { Close } from "@material-ui/icons";
import Alerts from "./Alerts";
import "./LoginModal.css";
import DcrustLogo from "assets/dcrust-logo.jpeg";
import { baseColor } from "styles/base";
import axios from "helpers/axios";

const LoginModal = ({ login, handleCloseLogin, toggleDrawer }) => {
  const [, dispatch] = useStateValue();
  const [register, setRegister] = useState(false);
  const [details, setDetails] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
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
    const error = validateInput({
      name: name,
      roll: roll,
      year: year,
      branch: branch,
    });
    if (error) {
      setvalError(error);
    } else {
      setDetails(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register) {
      const error = validateDetails({
        email: email,
        phone: phone,
        password: password,
      });
      if (error) {
        setvalError(error);
      } else {
        //request
        axios
          .post(
            "/api/users/register",
            JSON.stringify({
              firstName: name,
              username: email,
              password: password,
              phone: phone,
              branch: branch,
              year: year,
              rollNumber: roll,
            }),
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => res.json())
          .then((parJson) => {
            if (parJson.email) {
              dispatch({
                type: "SET_USER",
                user: {
                  email: parJson.email,
                  name: name,
                },
              });
              handleCloseLogin();
              toggleDrawer();
            } else if (parJson.error) {
              alert("error occured");
            }
          });
      }
    } else {
      if (email && password) {
        axios
          .post(
            "/api/users/login",
            JSON.stringify({
              username: email,
              password: password,
            }),
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => res.json())
          .then((parJson) => {
            if (parJson.firstName) {
              dispatch({
                type: "SET_USER",
                user: {
                  name: parJson.firstName,
                  email: email,
                },
              });
              handleCloseLogin();
              toggleDrawer();
            } else if (parJson.error) {
              alert("error occured");
            }
          });
      } else {
        setvalError({
          title: "Missing Input",
          body: "Please fill all fields",
          items:
            !email && !password
              ? "all"
              : !email
              ? "email"
              : !password
              ? "password"
              : "",
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
    setPassword("");
    setBranch("");
    setName("");
    setPhone("");
    setYear("");
    setRoll("");
    setDetails(true);
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
                      label="Email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={
                        valError &&
                        (valError.items === "all" || valError.items === "email")
                          ? true
                          : false
                      }
                    />

                    <Input
                      label="Password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      error={
                        valError &&
                        (valError.items === "all" ||
                          valError.items === "password")
                          ? true
                          : false
                      }
                    />
                    <Button type="submit" onClick={(e) => handleSubmit(e)}>
                      Sign In
                    </Button>
                    <MobLink className="links">
                      <p className="sec-link">Don't have an account?</p>
                      <p className="prim-link" onClick={handleRegister}>
                        Sign Up
                      </p>
                    </MobLink>
                  </div>
                </div>
              </Content>
            ) : details ? (
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
                      label="Full Name"
                      placeholder="Name"
                      value={name}
                      name="name"
                      error={
                        valError && valError.items.includes("name")
                          ? true
                          : false
                      }
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                      type="phone"
                      label="Roll No."
                      placeholder="Roll No."
                      name="roll"
                      value={roll}
                      error={
                        valError && valError.items.includes("roll")
                          ? true
                          : false
                      }
                      onChange={(e) => setRoll(e.target.value)}
                    />
                    <Input
                      select
                      label="Year of study"
                      value={year}
                      error={
                        valError && valError.items.includes("year")
                          ? true
                          : false
                      }
                      onChange={(e) => setYear(e.target.value)}
                    >
                      <MenuItem value={1}>First</MenuItem>
                      <MenuItem value={2}>Second</MenuItem>
                      <MenuItem value={3}>Third</MenuItem>
                      <MenuItem value={4}>Fourth</MenuItem>
                      <MenuItem value={5}>Fifth</MenuItem>
                    </Input>
                    <Input
                      label="Branch"
                      placeholder="Branch"
                      value={branch}
                      name="branch"
                      error={
                        valError && valError.items.includes("branch")
                          ? true
                          : false
                      }
                      onChange={(e) => setBranch(e.target.value)}
                    />

                    <Button type="submit" onClick={(e) => handleDetails(e)}>
                      Next
                    </Button>
                    <MobLink className="links">
                      <p className="sec-link">Already have an account?</p>
                      <p className="prim-link" onClick={handleRegister}>
                        Sign In
                      </p>
                    </MobLink>
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
                      type="email"
                      placeholder="Email"
                      name="email"
                      label="Email"
                      value={email}
                      error={
                        valError &&
                        (valError.items.includes("email") ||
                          valError.items.includes("emailInvalid"))
                          ? true
                          : false
                      }
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      type="phone"
                      label="Phone"
                      placeholder="Phone"
                      name="phone"
                      value={phone}
                      error={
                        valError &&
                        (valError.items.includes("phone") ||
                          valError.items.includes("phoneInvalid"))
                          ? true
                          : false
                      }
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <Input
                      type="password"
                      label="Password"
                      placeholder="Password"
                      value={password}
                      error={
                        valError &&
                        (valError.items.includes("password") ||
                          valError.items.includes("passInvalid"))
                          ? true
                          : false
                      }
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" onClick={(e) => handleSubmit(e)}>
                      Sign Up
                    </Button>
                    <Button type="submit" onClick={(e) => setDetails(!details)}>
                      Back
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
  display: ${getDeviceType() === "mobile" ? "none" : "flex"};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled(TextField)`
  width: ${getDeviceType() === "mobile" ? "75%" : "40%"};
  height: 50px;
  padding-left: 30px;
  box-shadow: 12px 12px 25px rgb(0 0 0 / 6%);
`;

const Button = styled.button`
  margin-top: 1.5rem;
  width: ${getDeviceType() === "mobile" ? "30%" : "20%"};
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
const MobLink = styled.div`
  display: ${getDeviceType() === "desktop" ? "none" : ""};
`;
