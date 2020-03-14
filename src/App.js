import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Nomatch from './noMatch';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Jumbotronn from './components/Jumbotron';

class App extends Component {
  render(){
    return(
      <Layout >
        <React.Fragment>
          <Router>
            <NavigationBar />
              <Jumbotronn />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route component={Nomatch}></Route>
            </Switch>
          </Router>
        </React.Fragment>
      </Layout>
    );
  }
}

export default App;
