/*import logo from './logo.svg';*/
import './App.css';
import React, {Component} from 'react'
import Navigator from './components/navigator'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { render } from '@testing-library/react';
import Main from './components/main'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render(){
    return(
      <div className="demo-big-content" >
            <Layout>
                <Header className="header-color" title="The Terminator" scroll >
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/schedule">Schedule</Link>
                        <Link to="/experiments">Experiments</Link>
                    </Navigation>
                </Header>
                <Drawer title="Navigate" style={{background:"#426570", color:"white"}}>
                    <Navigation>
                        <Link to="/" style={{color:"white"}}>Home</Link>
                        <Link to="/aboutme" style={{color:"white"}}>About Me</Link>
                        <Link to="/schedule"style={{color:"white"}}>Schedule</Link>
                        <Link to="/experiments" style={{color:"white"}}>Experiments</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
