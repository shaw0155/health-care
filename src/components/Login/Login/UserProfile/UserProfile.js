import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

const UserProfile = () => {
  return (
    <Card
      sx={{
        display: { xs: "flex-wrap", md: "flex" },
        maxWidth: "600px",
        my: 8,
        mx: "auto",
        p: 5,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Welcome to our Hospital, Ahmed Khaled
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            ahmed_khaled@email.com
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
      <Avatar
        sx={{
          mx: { xs: "auto", md: 1 },
          border: 1,
          borderColor: "#f48fb1",
          boxShadow: 1,
          bgcolor: pink[500],
          width: 150,
          height: 150,
        }}
        alt="person"
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
      />
    </Card>
  );
};

export default UserProfile;
