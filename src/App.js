import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./PrivetRoute/PrivetRoute";
import About from "./components/About/About";
import Footer from "./components/Header/Footer/Footer";
import Header from "./components/Header/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Login/Register/Register";
import Notfound from "./components/Notfound/Notfound";
import Appointment from "./components/Services/Appointment/Appointment";
import Doctors from "./components/Services/Doctors/Doctors";
import ServiceDetails from "./components/Services/ServiceDetails/ServiceDetails";
import Services from "./components/Services/Services";

// custom style for this application
export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#f48fb1",
    },
    alternate: {
      main: "#fff",
    },
    text: {
      secondary: "#212121",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/profile">
              <Login></Login>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/services/details/:servId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
