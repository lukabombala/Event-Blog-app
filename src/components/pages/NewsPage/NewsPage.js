import React, { Component } from "react";
import {MDBContainer , MDBCol, MDBRow} from "mdbreact";
import FixedNewsCard from "../../FixedNewsCard.js";

class NewsPage extends Component {
    render() {
        return(
            <React.Fragment>
              <MDBContainer>
                <header>
                <div
                    id='baner'
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('https://www.tropiciele.net.pl/wp-content/uploads/ngg_featured/mg7_8400.jpg')",marginTop: '70px' }}
                >
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                        <h1 className='mb-3'>Aktualności</h1>
                        
                        </div>
                    </div>
                    </div>
                </div>
                </header>
              
            <React.Fragment>
              <MDBContainer>
                
              <hr className="my-5"/>
               <MDBContainer style={{ marginTop: '20px' }}
               >
                <MDBRow>
                  <MDBCol lg="6" md="12">
              
                    <FixedNewsCard title="Początek zlotu już niebawem!" 
                                   image="https://www.tropiciele.net.pl/wp-content/uploads/ngg_featured/mg7_8400.jpg" 
                                   category="Ważne informacje"
                                   icon="exclamation"
                                   dateadd="4/01/2022"
                                   text=""
                                   />

                  </MDBCol>
                  <MDBCol lg="6" md="12">

                    

                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol lg="6" md="12">

                    

                  </MDBCol>
                  <MDBCol lg="6" md="12">

                    

                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              
              </MDBContainer>
            </React.Fragment>
              
              </MDBContainer>
            </React.Fragment>
        );
    }
}

export default NewsPage;