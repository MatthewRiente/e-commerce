import React from 'react';
import './css/index.scss';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import Contact_Container from './Contact_Container';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
      return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/Container' component={Container}/>
                    <Route path='/Contact_Container' component={Contact_Container}/>
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
      );
    }
  }
  
  export default App;