import React, { Component } from "react";
import {MDBContainer, MDBListGroup, MDBListGroupItem, MDBIcon} from "mdbreact";

class ContactPage extends Component {
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
              <h1 className='mb-3'>Kontakt</h1>
             
            </div>
          </div>
        </div>
      </div>
      </header>
              <hr className="my-5"/>
               <MDBContainer style={{ marginTop: '20px',marginLeft: '-20px',marginTop: '20px'}}
               >
            
            <div style={{ minWidth: '20rem' }}>
            <h6 className='bg-light p-2 border-top border-bottom'>Główna koordynatorka zlotu</h6>
            <MDBListGroup light className='mb-4'>
                <MDBListGroupItem>phm. Magdalena Szkudlarska HR <br/> 
                <MDBIcon fas icon='phone' /> 664-880-476</MDBListGroupItem>
            </MDBListGroup>
            <h6 className='bg-light p-2 border-top border-bottom'>Biuro zlotu</h6>
            <MDBListGroup light className='mb-4'>
                <MDBListGroupItem>phm. Natalia Paszkowska HR <br/> 
                <MDBIcon fas icon='phone' /> 665-827-391</MDBListGroupItem>
            </MDBListGroup>
            <h6 className='bg-light p-2 border-top border-bottom'>Oboźna</h6>
            <MDBListGroup light className='mb-4'>
                <MDBListGroupItem>sam. Weronika Lisiewicz <br/> 
                <MDBIcon fas icon='phone' /> 790-433-804</MDBListGroupItem>
            </MDBListGroup>
            <h6 className='bg-light p-2 border-top border-bottom'>Osoba odpowiedzialna za program zuchenek</h6>
            <MDBListGroup light className='mb-4'>
                <MDBListGroupItem>pwd. Zuzanna Mażul wędr <br/> 
                <MDBIcon fas icon='phone' /> 666-377-739</MDBListGroupItem>
            </MDBListGroup>
            <h6 className='bg-light p-2 border-top border-bottom'>Osoba odpowiedzialna za program harcerek</h6>
            <MDBListGroup light className='mb-4'>
                <MDBListGroupItem>phm. Aleksandra Wolman HR <br/> 
                <MDBIcon fas icon='phone' /> 690-009-228</MDBListGroupItem>
            </MDBListGroup>
            <h6 className='bg-light p-2 border-top border-bottom'>Osoba odpowiedzialna za program wędrowniczek</h6>
            <MDBListGroup light className='mb-4'>
                <MDBListGroupItem>pwd. Aleksandra Sutkowska wędr <br/> 
                <MDBIcon fas icon='phone' /> 722-189-996</MDBListGroupItem>
            </MDBListGroup>
            </div>
              </MDBContainer>
              </MDBContainer>
            </React.Fragment>
        );
    }
}

export default ContactPage;