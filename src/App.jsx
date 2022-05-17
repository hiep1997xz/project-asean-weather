import React from "react";
import { Provider } from "react-redux";
import './App.css';
import store from "./presentation/redux/store/index";
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from "./presentation/pages/homePage";
import Routes from "./presentation/routes/routes";
import HeaderHome from "./presentation/layouts/headerHome";
import HomeBody from "./presentation/layouts/homeBody";
import Footer from "./presentation/layouts/footer";
import ReduxToastr from "react-redux-toastr";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/main/*" component={Routes} />
      <Route path="/" exact render={(props) => <HomePage {...props} Header={HeaderHome} HomeBody={HomeBody} Footer={Footer} />} ></Route>
      <ReduxToastr
        timeOut={5000}
        newestOnTop={true}
        position="top-center"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </BrowserRouter>
  </Provider>
);

export default App;
