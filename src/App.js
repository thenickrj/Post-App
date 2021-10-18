import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./Screens/MyNotes/MyNotes";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route path="/mynotes" component={() => <MyNotes />} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
