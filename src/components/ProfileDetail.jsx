import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "../styles/ProfileDetail.css";

export function ProfileDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

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

  if (!user) {
    return <div>Loading...</div>;
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
        </CardContent>
      </Card>
    </Container>
  );
}
