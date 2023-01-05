import React, { Component } from "react";
import {MDBContainer } from "mdbreact";
{/*import LargeNewsCard from "../../LargeNewsCard.js";*/}

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
              <hr className="my-5"/>
               <MDBContainer style={{ marginTop: '20px' }}
               >
            <p>Na ten moment brak aktualności...</p>
              </MDBContainer>
              </MDBContainer>
            </React.Fragment>
        );
    }
}

export default NewsPage;