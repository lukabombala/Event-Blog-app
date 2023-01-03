import React, { Component } from "react";
import {MDBContainer } from "mdbreact";

class ArticlePage extends Component {
    render() {
        return(
            <React.Fragment>
              <MDBContainer>
                
              <hr className="my-5"/>
              <h2 className="h1 text-center my-5 font-weight-bold">Strona głowna </h2>
               <MDBContainer style={{ marginTop: '20px' }}
               >
              
              </MDBContainer>
              </MDBContainer>
            </React.Fragment>
        );
    }
}

export default ArticlePage;