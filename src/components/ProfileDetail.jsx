import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import "../styles/ProfileDetail.css";

export function ProfileDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://express-t4.onrender.com/api/users/${id}`
        );
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  if (!user) {
    return;
  }

  return (
    <Container style={{ padding: "3rem" }}>
      <Card sx={{ maxWidth: 600, margin: "0 auto" }}>
        <CardContent className="profile-details">
          <img
            src={user.picture}
            alt="User"
            style={{ width: "35%", marginBottom: "1rem" }}
          />
          <Typography variant="h4" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {user.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: {user.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age: {user.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gender: {user.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Company: {user.company}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {user.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            About: {user.about}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Friends:
          </Typography>
          <Typography>
            {user.friends.map((friend) => (
              <Typography key={friend.id} variant="body1" component="div">
                {friend.name}
              </Typography>
            ))}
          </Typography>
          <Button
            variant="contained"
            color="error"
            type="submit"
            onClick={handleSubmit}
          >
            Back
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
