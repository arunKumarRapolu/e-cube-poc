import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './helpers/store';
import { history } from './helpers/history';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import HomePage from "./components/HomePage";
import ListPage from "./components/ListPage";
import DetailPage from "./components/DetailPage";
import BookingPage from "./components/BookingPage";
import ConfirmationPage from "./components/ConfirmationPage";

class App extends React.Component {
  render(){
      return (
          <BrowserRouter history={history}>
              <Switch>
                  <Main>
                      <Route exact path="/" component={HomePage} />
                      <Route exact path="/list" component={ListPage} />
                      <Route exact path="/details" component={DetailPage} />
                      <Route exact path="/booking" component={BookingPage} />
                      <Route exact path="/confirmation" component={ConfirmationPage} />
                  </Main>
              </Switch>
          </BrowserRouter>
      );
  }
}

ReactDOM.render( 
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));
