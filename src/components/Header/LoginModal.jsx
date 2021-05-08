import { IconButton, Modal, TextField } from "@material-ui/core";
import { getDeviceType, validateInput } from "helpers";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStateValue } from "helpers/StateProvider";
// import axios from "helpers/axios";
import GoogleLogin from "react-google-login";
import { Close } from "@material-ui/icons";
import Alerts from "./Alerts";

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
              <Box>
                <Head>
                  <h2>Login</h2>
                  <IconButton onClick={close}>
                    <Close />
                  </IconButton>
                </Head>
                <Form>
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
                    Login
                  </Button>
                  <p>
                    New User?
                    <Register onClick={handleRegister}>Register</Register>
                  </p>
                  <p>
                    <GoogleLogin
                      clientId="269195292319-tpn3nc6dfm6jncjlsd7jp3ogluicr7fb.apps.googleusercontent.com"
                      buttonText="Continue with Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      theme="dark"
                      cookiePolicy={"single_host_origin"}
                    />
                  </p>
                </Form>
              </Box>
            ) : !details ? (
              <Box>
                <Head>
                  <h2>Register</h2>
                  <IconButton onClick={close}>
                    <Close />
                  </IconButton>
                </Head>
                <Form>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    name="username"
                    autocomplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    autocomplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    autocomplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    autocomplete="off"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <Button
                    type="submit"
                    onClick={(e) => {
                      handleDetails(e);
                    }}
                  >
                    Next
                  </Button>
                  <p>
                    <GoogleLogin
                      clientId="269195292319-tpn3nc6dfm6jncjlsd7jp3ogluicr7fb.apps.googleusercontent.com"
                      buttonText="Continue with Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      theme="dark"
                      // isSignedIn={true}
                      cookiePolicy={"single_host_origin"}
                    />
                  </p>
                  <p>
                    <Register onClick={handleRegister}>Back to Login</Register>
                  </p>
                </Form>
              </Box>
            ) : (
              <Box>
                <Head>
                  <h2>Details</h2>
                  <IconButton onClick={close}>
                    <Close />
                  </IconButton>
                </Head>
                <Form>
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
                    label="Birthday"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />

                  <Button type="submit" onClick={(e) => handleSubmit(e)}>
                    Register
                  </Button>

                  <p>
                    <Register onClick={handleDetails}>
                      Back to Register
                    </Register>
                  </p>
                </Form>
              </Box>
            )}
          </ModalContainer>
        }
      </Modal>
    </>
  );
};

export default LoginModal;
const ModalContainer = styled.div`
  position: "absolute";
  width: ${getDeviceType() === "desktop" ? "30vw" : "82vw"};
  height: 80vh;
  margin: auto;
  background-color: rgba(12, 136, 194, 0.945);
  border: 1px solid rgba(255, 255, 255, 0.479);
  margin-top: 15vh;
  border-radius: 30px;
`;
const Box = styled.div`
  padding: 50px 30px;
  display: flex;
  height: 85%;
  flex-direction: column;
  justify-content: space-between;
  color: #040016;
`;

const Input = styled.input`
  width: 90%;
  height: 6vh;
  padding-left: 20px;
  border: none;
  border-radius: 20px;
  outline: none;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
`;
const Button = styled.button`
  width: 80%;
  height: 7vh;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  background-color: #040016;
  color: #fff;
  :hover {
    background-color: rgba(4, 0, 22, 0.781);
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
    width: 90%;
  }
`;
