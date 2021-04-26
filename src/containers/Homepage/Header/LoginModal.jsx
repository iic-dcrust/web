import { IconButton, Modal } from "@material-ui/core";
import { getDeviceType } from "helpers";
import React, { useState } from "react";
import styled from "styled-components";
import { useStateValue } from "helpers/StateProvider";
import axios from "helpers/axios";

const LoginModal = ({ login, handleCloseLogin }) => {
  const [, dispatch] = useStateValue();
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [roll, setRoll] = useState("");

  const handleRegister = () => {
    setRegister(!register);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (register) {
      if (password === confirmPassword) {
        axios
          .get(`/api/v1/login/${email}`)
          .then((response) => {
            if (response.data.length === 0) {
              axios
                .post("/api/v1/register", {
                  email: email,
                  roll: roll,
                  password: password,
                })
                .then((res) =>
                  dispatch({
                    type: "SET_USER",
                    user: res.data,
                  })
                )
                .catch((error) => alert(error.message));
            } else {
              axios
                .post("/api/v1/login", {
                  email: email,
                  password: password,
                })
                .then((res) =>
                  dispatch({
                    type: "SET_USER",
                    user: res.data,
                  })
                )
                .catch((error) => alert(error.message));
            }
          })
          .catch((error) => alert(error.message));
      } else {
        alert("Password and Confirm Password don't match ");
      }
    } else {
      axios
        .post("/api/v1/login", {
          email: email,
          password: password,
        })
        .then((res) =>
          dispatch({
            type: "SET_USER",
            user: res.data,
          })
        )
        .catch((error) => alert(error.message));
    }
  };

  const close = () => {
    handleCloseLogin();
    setRegister(false);
    setEmail("");
    setRoll("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Modal
      open={login}
      onClose={close}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {
        <ModalContainer>
          {!register ? (
            <Box>
              <Head>
                <h2>Login</h2>
                <IconButton onClick={close}>x</IconButton>
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
              </Form>
            </Box>
          ) : (
            <Box>
              <Head>
                <h2>Register</h2>
                <IconButton onClick={close}>x</IconButton>
              </Head>
              <Form>
                <Input
                  type="phone"
                  placeholder="Roll no."
                  value={roll}
                  onChange={(e) => setRoll(e.target.value)}
                />
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
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <Button type="submit" onClick={(e) => handleSubmit(e)}>
                  Register
                </Button>
                <p>
                  <Register onClick={handleRegister}>Back to Login</Register>
                </p>
              </Form>
            </Box>
          )}
        </ModalContainer>
      }
    </Modal>
  );
};

export default LoginModal;
const ModalContainer = styled.div`
  position: "absolute";
  width: ${getDeviceType() === "desktop" ? "30vw" : "82vw"};
  height: 70vh;
  margin: auto;
  background-color: rgba(12, 136, 194, 0.945);
  border: 1px solid rgba(255, 255, 255, 0.479);
  margin-top: 15vh;
  border-radius: 30px;
`;
const Box = styled.div`
  padding: 50px 30px;
  display: flex;
  height: 80%;
  flex-direction: column;
  justify-content: space-between;
  color: #040016;
`;

const Input = styled.input`
  width: 90%;
  height: 7vh;
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
