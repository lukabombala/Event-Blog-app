import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow , MDBCard, MDBCardBody, MDBIcon, MDBCardTitle,MDBListGroup, MDBListGroupItem, MDBTypography} from 'mdb-react-ui-kit';
import { BrowserRouter as Router } from 'react-router-dom';
import './MainPage.css';

class MainPage extends Component {
    render() {
        return(
          <Router>
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
              <h1 className='mb-3'>Najważniejsze informacje</h1>
             
            </div>
          </div>
        </div>
      </div>
      </header>
              <hr className="my-5"/>
              
               <MDBContainer style={{ marginTop: '20px' }}
               >
              
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Adres Zlotu</MDBCardTitle>
                  Szkoła Podstawowa nr 1 w Kamieńcu Ząbkowickim (ul. Zamkowa 4)
                  <MDBBtn href='https://goo.gl/maps/9JXyuDeCfJCfwbxa8' style={{ marginTop: '20px' }} color='link' rippleColor='primary' className='text-reset m-0'>
                    Mapy google <MDBIcon fas icon='location-arrow' size='lg'/>
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
              <MDBCard style={{ marginTop: '20px'}}>
                <MDBCardBody>
                  <MDBCardTitle>Plan godzinowy</MDBCardTitle>
                  <h6 className='bg-light p-2 border-top border-bottom'>PIĄTEK</h6>
                  <MDBTypography listUnStyled className='mb-0'>
                    <li className='mb-1'>19:00 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />przedstaw nam swoją jednostkę - tworzenie mapy chorągwi
                    </li>
                    <li className='mb-1'>19:30 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />gra "planszowa" po Dolnym Śląsku
                    </li>
              
                </MDBTypography>
                <br/>
                  <h6 className='bg-light p-2 border-top border-bottom'>SOBOTA</h6>
                  <MDBTypography listUnStyled className='mb-0'>
                    <li className='mb-1'>&nbsp;&nbsp;8:00 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />pobudka (wg potrzeb może być też wcześniej) + śniadanie w jednostkach
                    </li>
                    <li className='mb-1'>&nbsp;&nbsp;9:30 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />spotkanie z organizatorami gry w celu wytłumaczenia zasad
                    </li>
                    <li className='mb-1'>10:00 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />start gry
                    </li>
                    <li className='mb-1'>16:00 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />obiad
                    </li>
                    <li className='mb-1'>17:00 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />przywitanie gości, przedstawienie ich oraz tort
                    </li>
                    <li className='mb-1'>17:30 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />ognisko
                    </li>
                    <li className='mb-1'>19:00 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />Msza św.
                    </li>
                    <li className='mb-1'>20:00 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />kolacja
                    </li>
                    <li className='mb-1'>20:30 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />czas dla jednostek oraz na "spotkanie z historią" w kawiarence
                    </li>
                    <li className='mb-1'>22:00 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />cisza nocna
                    </li>
                    <li className='mb-1'>22:00+ &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />czas dla drużynowych i instruktorek (kawiarenka)
                    </li>
                </MDBTypography>
                <br/>
                  <h6 className='bg-light p-2 border-top border-bottom'>NIEDZIELA</h6>
                  <MDBTypography listUnStyled className='mb-0'>
                    <li className='mb-1'>&nbsp;&nbsp;8:00 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />pobudka (wg potrzeb może być też wcześniej)
                    </li>
                    <li className='mb-1'>&nbsp;&nbsp;8:30 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />śniadanie
                    </li>
                    <li className='mb-1'>&nbsp;&nbsp;9:30 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />apel
                    </li>
                    <li className='mb-1'>10:00 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />czas na pakowanie i sprzątanie
                    </li>
                    <li className='mb-1'>11:00 &nbsp;
                      <MDBIcon icon='arrow-right' className='me-2 text-info' />zakończenie zlotu
                    </li>
                    </MDBTypography>
                </MDBCardBody>
              </MDBCard>
              </MDBContainer>
              </MDBContainer>
            </React.Fragment>
          </Router>

        );
    };
}

export default MainPage;