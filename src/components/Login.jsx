import { Card, CardContent, Button, TextField, Container } from "@mui/material";
import { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: null,
    password: null,
  });

  const validateUser = (name, value) => {
    switch (name) {
      case "username":
        if (value !== "testemail@dal.ca") {
          setError({
            ...error,
            username: "Invalid username",
          });
        } else {
          setError({
            ...error,
            username: "",
          });
        }
        break;
      case "password":
        if (value !== "Test@123") {
          setError({
            ...error,
            password: "Invalid password",
          });
        } else {
          setError({
            ...error,
            password: "",
          });
        }
        break;
    }
  };

  const handleChange = (change) => {
    const { name, value } = change.target;
    setUserData({ ...userData, [name]: value });
    validateUser(name, value);
    console.log(userData, error);
  };

  const handleSubmit = (submit) => {
    submit.preventDefault();

    const formIsValid = Object.values(error).every(
      (errorMsg) => errorMsg === ""
    );

    if (formIsValid) {
      setUserData({
        username: "",
        password: "",
      });
      navigate("/Profile");
    }
  };

  return (
    <Container sx={{ display: "flex" }} className="login">
      <Card
        sx={{ minWidth: 275 }}
        style={{ borderRadius: "0.5rem" }}
        className="card"
      >
        <CardContent className="card-content">
          <TextField
            id="username"
            className="form-fields"
            name="username"
            value={userData.username}
            error={!!error.username}
            helperText={error.username}
            label="Username"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="password"
            className="form-fields"
            name="password"
            value={userData.password}
            error={!!error.password}
            helperText={error.password}
            label="Password"
            variant="outlined"
            type="password"
            onChange={handleChange}
          />
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Login
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
