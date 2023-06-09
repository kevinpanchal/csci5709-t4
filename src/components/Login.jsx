import { Card, CardContent, Button, TextField, Container } from "@mui/material";
import { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (change) => {
    const { name, value } = change.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };

  const handleSubmit = async (submit) => {
    submit.preventDefault();

    try {
      const response = await axios.post(
        "https://express-t4.onrender.com/api/login",
        userData
      );
      console.log(response.data.message);
      navigate("/Profile");
    } catch (error) {
      console.error(error);
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
            label="Username"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="password"
            className="form-fields"
            name="password"
            value={userData.password}
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
