import { Fingerprint } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LoginIcon from "@mui/icons-material/Login";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import "./Login.css";
import UserProfile from "./UserProfile/UserProfile";

const Login = () => {
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const [login, setLogin] = useState();
  const [error, setError] = useState();

  //location is use for privet route

  const handleGoogleSignIn = () => {};

  const handleFacebooksignIn = () => {};

  const handleGithubSignIn = () => {};

  const handlePasswordReset = () => {};

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(login);

    if (username === "ahmed khaled" && pass === "12345") {
      localStorage.setItem("login", true);
      window.location.reload();
    } else {
      setError("invalid username or passworrd");
    }
  };

  const toggleLogin = (value) => {
    setLogin(value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container id="login" maxWidth="xl">
        {localStorage.getItem("login") ? (
          <>
            <UserProfile />
          </>
        ) : (
          <>
            {/* if user is logout */}
            <Container component="main" maxWidth="xs">
              <CssBaseline />

              <Box
                sx={{
                  marginTop: 15,
                  marginBottom: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                  <LoginIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign In
                </Typography>
                <Box component="div" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        onBlur={handleUsername}
                        required
                        fullWidth
                        id="username"
                        label="username"
                        name="username"
                        autoComplete="username"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        onBlur={handlePass}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                      <Typography sx={{ p: 1 }} color="red">
                        {error}
                      </Typography>
                    </Grid>

                    <Button
                      className="body-link-text-style"
                      variant="body2"
                      onClick={handlePasswordReset}
                    >
                      Forget Password? Reset now
                    </Button>
                  </Grid>
                  <Button
                    onClick={handleLogin}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    <Fingerprint /> Login
                  </Button>
                </Box>
                <Grid
                  container
                  justifyContent="flex-end"
                  style={{ justifyContent: "center" }}
                >
                  <Grid item>
                    <Button onClick={() => toggleLogin(true)}>
                      <Link
                        className="body-link-text-style"
                        to="/register"
                        variant="body2"
                      >
                        New here? Register
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
                {/* google btn */}

                <Typography style={{ justifyContent: "center" }}>
                  <Grid
                    container
                    sx={{ mt: 2, mb: 3 }}
                    justifyContent="flex-end"
                  >
                    <Grid item>
                      <GoogleButton
                        className="google-btn"
                        type="dark" // can be light or dark
                        onClick={handleGoogleSignIn}
                      />
                    </Grid>
                  </Grid>

                  <Grid container sx={{ mb: 3 }} justifyContent="flex-end">
                    {/* Facebook btn */}
                    <Grid item>
                      <Button
                        onClick={handleFacebooksignIn}
                        variant="contained"
                        sx={{ p: 1, bgcolor: "#4267B2" }}
                      >
                        <FacebookIcon />
                        Facebook
                      </Button>
                    </Grid>
                    <Typography textAlign="center" sx={{ p: 2 }}>
                      Or
                    </Typography>
                    {/* GitHUB btn */}
                    <Grid item>
                      <Button
                        onClick={handleGithubSignIn}
                        variant="contained"
                        sx={{ p: 1, mb: 2, bgcolor: "#171515" }}
                      >
                        <GitHubIcon /> GitHub
                      </Button>
                    </Grid>
                  </Grid>
                </Typography>
              </Box>
            </Container>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Login;
