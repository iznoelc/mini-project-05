import Home from "../components/Home";
import Root from "../layout/Root";
import SignUpPage from "../components/SignUpPage";
import LoginPage from "../components/LoginPage";

const MainRouter = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
    //   { path: "/", Component: AboutUs }, add dashboard here later
      { path: "/signup", Component: SignUpPage },
      { path: "/login", Component: LoginPage },
    ],
  },
];

export default MainRouter;