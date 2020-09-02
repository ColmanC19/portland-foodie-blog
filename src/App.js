import React, { Component } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import HomePage from './pages/HomePage'; 
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route component={NotFoundPage} />
            </Switch>
            <header>
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              {/* <h1>We now have Auth!</h1> */}
            </header>
            <AmplifySignOut />
          </div>
        </div>
 
      </Router>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header>
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>We now have Auth!</h1>
//       </header>
//       <AmplifySignOut />
//     </div>
//   );
// }

export default withAuthenticator(App);