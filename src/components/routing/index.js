import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "../../constants";

import Layout from "../CouponManagement/Layout/Layout";
import NotFound from "../CouponManagement/notFound";

import { SideBar } from "../SideBar";
import { Login } from "../UserManagement/Login";
import { Signup } from "../UserManagement/Signup";
import { ForgotPassword } from "../UserManagement/ForgetPassword";
import { PasswordChanged } from "../UserManagement/ChangePassword";

import HomePage from "../HomePage";
import { PrivateRoute } from "../../components/PrivateRoute.js";
import Masterclass from "../Masterclass";
import Recording from "../Recording";
import ChatRoom from "../ChatRoom";
import Quiz from "../Quiz";
import Webinar from "../Webinar";
import { QuizProvider } from "../../context/quiz";
import VideoChat from "../VideoChat/VideoChat";

function Routing() {
  return (
    <BrowserRouter>
      <SideBar />
      <div className="main">
        <Switch>
          <Route exact path={routes.home.path}>
            {/* <Layout> */}
            <HomePage />
            {/* </Layout> */}
          </Route>

          <PrivateRoute exact path={routes.notFound.path}>
            <Layout>
              <NotFound />
            </Layout>
          </PrivateRoute>

          <Route exact path={routes.notFound.path}>
            <Layout>
              <NotFound />
            </Layout>
          </Route>

          <Route exact path={routes.login.path}>
            {/* <Layout> */}
            <Login />
            {/* </Layout> */}
          </Route>

          <Route exact path={routes.register.path}>
            <Signup />
          </Route>

          <Route exact path={routes.masterclass.path}>
            <Masterclass />
          </Route>
          <Route exact path={routes.forgotPassword.path}>
            <Layout>
              <ForgotPassword />
            </Layout>
          </Route>
          <Route exact path={routes.recorded.path}>
            <Layout>
              <Recording />
            </Layout>
          </Route>
          <Route exact path={routes.chat.path}>
            <Layout>
              <ChatRoom />
            </Layout>
          </Route>
          <Route exact path={routes.quiz.path}>
            <Layout>
              <QuizProvider>
              <Quiz />
              </QuizProvider>
            </Layout>
          </Route>
          <Route exact path={routes.webinar.path}>
            <Layout>
             <Webinar/>
            </Layout>
          </Route>
          <Route exact path={routes.videochat.path}>
            <Layout>
             <VideoChat/>
            </Layout>
          </Route>

          <PrivateRoute exact path={routes.passwordChanged.path}>
            <Layout>
              <PasswordChanged />
            </Layout>
          </PrivateRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export { Routing };
