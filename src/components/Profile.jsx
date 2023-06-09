import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";

export function Profile() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://express-t4.onrender.com/api/users"
        );
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDetailsClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <Container style={{ padding: "3rem" }}>
      <Grid container spacing={2}>
        {userData.map((user) => (
          <Grid item key={user._id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <img
                  src={user.picture}
                  alt="User"
                  style={{ width: "100%", marginBottom: "1rem" }}
                />
                <Typography variant="h6" component="div">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: {user.phone}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleDetailsClick(user._id)}
                  style={{ marginTop: "1rem" }}
                >
                  Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
