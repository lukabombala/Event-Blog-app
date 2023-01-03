import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

import "./index.css";
import NavbarPage from "./components/Navbar.js"
import MainPage from "./components/pages/MainPage/MainPage.js"
import ContactPage from "./components/pages/ContactPage/ContactPage.js"
import NewsPage from "./components/pages/NewsPage/NewsPage.js"
import SongPage from "./components/pages/SongPage/SongPage.js"
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menudisplay: {
          mainpage: true,
          newspage: false,
          contactpage: false,
          songpage: false,
          
      },
    };
  }

  handleMenuButtonClick = (name) => {
    const menudisplay = this.state.menudisplay;
    Object.keys(menudisplay).forEach(key => menudisplay[key] = false)
    menudisplay[name] = true;
    this.setState({menudisplay});
    
  }

  componentDidMount() {
    document.title = "Zlot XXX lecia"
  }
  
  render() {
    return (
      <React.Fragment>
        <NavbarPage handleClick={this.handleMenuButtonClick}/>
          <MDBContainer style={{ marginTop: '25px' }}>

            {this.state.menudisplay.mainpage && 
              <React.Fragment>
                <MainPage/>               
              </React.Fragment> 
            }
          
          {this.state.menudisplay.newspage && 
              <React.Fragment>
                <NewsPage/>               
              </React.Fragment> 
            }

          {this.state.menudisplay.contactpage && 
              <React.Fragment>
                <ContactPage/>               
              </React.Fragment> 
            }

          {this.state.menudisplay.songpage && 
              <React.Fragment>
                <SongPage/>               
              </React.Fragment> 
            }
          </MDBContainer>
          <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
