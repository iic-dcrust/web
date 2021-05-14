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
  const [loginBtnDisable, setLoginBtnDisable] = useState(false);
  const [registerBtnDisable, setRegisterBtnDisable] = useState(false);

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

  const handleSubmit = async (e) => {
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
        //request registration
        try {
          setRegisterBtnDisable(true);
          let postData = {
            firstName: name,
            username: email,
            phone: phone,
            branch: branch,
            year: year,
            rollNumber: roll,
            email: email,
            password: password,
          };

          let response = await axios.post(
            "/api/users/register",
            JSON.stringify(postData)
          );

          if (response.data) {
            dispatch({
              type: "SET_USER",
              user: {
                email: response.data.email,
                name: name,
              },
            });
            localStorage.setItem("user", JSON.stringify(email, name));
            handleCloseLogin();
            setRegisterBtnDisable(false);
          } else {
            alert("Unexpected Error");
          }
        } catch (err) {
          if (err.response) {
            if (err.response.status === 400) {
              alert(err.response.data.error);
            } else if (err.response.status === 500) {
              alert("Internal Error");
            }
          } else {
            alert(err);
          }
          setRegisterBtnDisable(false);
        }
      }
    } else {
      if (email && password) {
        //request
        try {
          setLoginBtnDisable(true);
          let postData = {
            email: email,
            password: password,
          };

          let response = await axios.post(
            "/api/users/login",
            JSON.stringify(postData)
          );

          if (response.data) {
            dispatch({
              type: "SET_USER",
              user: {
                email: email,
                name: response.data.firstName,
              },
            });
            localStorage.setItem("user", JSON.stringify(email, name));

            handleCloseLogin();
            setLoginBtnDisable(false);
          } else {
            alert("Unexpected Error");
          }
        } catch (err) {
          if (err.response) {
            if (err.response.status === 400) {
              alert(err.response.data.error);
            } else if (err.response.status === 500) {
              alert("Internal Error");
            }
          } else {
            alert(err);
          }
          setLoginBtnDisable(false);
        }
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

  const responseGoogle = async (res) => {
    try {
      let response = await axios.post(
        "/api/users/google",
        JSON.stringify({ idToken: res.tokenId })
      );

      if (response.data.email) {
        dispatch({
          type: "SET_USER",
          user: {
            email: response.data.email,
            name: response.data.firstName,
          },
        });
        handleCloseLogin();
      } else {
        alert("Unexpected Error");
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          alert(err.response.data.error);
        } else if (err.response.status === 500) {
        }
      } else {
        alert(err);
      }
    }
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
                    <p
                      className="prim-link"
                      onClick={handleRegister}
                      disabled={registerBtnDisable}
                    >
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
                        // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        clientId="269195292319-tpn3nc6dfm6jncjlsd7jp3ogluicr7fb.apps.googleusercontent.com"
                        buttonText="Continue with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        theme="light"
                        cookiePolicy="single_host_origin"
                        className="google-login"
                      />
                      <p className="login-alt-text sideline">
                        <span>or login with email</span>
                      </p>
                    </div>
                    <Input
                      type="email"
                      label="Email"
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
                    <Button
                      type="submit"
                      onClick={(e) => handleSubmit(e)}
                      disabled={loginBtnDisable}
                    >
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
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
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
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
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
  margin: 17px auto !important;
  text-align: left;
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
