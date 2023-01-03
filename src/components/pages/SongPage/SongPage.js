import React, { Component } from "react";
import {MDBContainer, MDBCard, MDBCardBody} from "mdbreact";

class SongPage extends Component {
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
              <h1 className='mb-3'>Piosenka "Rzeka"</h1>
             
            </div>
          </div>
        </div>
      </div>
      </header>
              <hr className="my-5"/>
               <MDBContainer style={{ marginTop: '20px'}}
               >
<MDBCard>    
<MDBCardBody>
<p>Powrócimy do naszych korzeni, <b>A E</b> </p>
<p>Do źródła naszego istnienia, <b>D A</b> </p>
<p>Gdzie lwowski harcerski strumyk </p>
<p>W rzekę historii się zmienia. </p>
<p>Wodo gasząca pragnienia </p>
<p>Serc wielu skautów, harcerzy, </p>
<p>W dzień odzyskania wolności </p>
<p>Na cały kraj się rozszerzysz. </p>

<br/>

<p>Płyń nam zawsze i nie ustawaj, <b>D E</b> </p>
<p>O wielka rzeko historii, <b>fis</b> </p>
<p>Ogłaszaj światu przeszłość naszą, <b>D A</b> </p>
<p>Ideały harcerskiej drogi. <b>E A</b> </p>

<br/>

<p>Stałaś się silna szeroka </p>
<p>Uczyłaś służby, braterstwa, </p>
<p>Gdy twe nurty krwią zbroczono, </p>
<p>Dałaś dowód odwagi i męstwa. </p>
<p>Chciano cię zniszczyć, zgładzić, </p>
<p>Ty broniłaś ofiarnie swych brzegów, </p>
<p>Za które życie oddali </p>
<p>Harcerze z Szarych Szeregów. </p>

<br/>
<p>Płyń nam zawsze...</p>
<br/>

<p>Próbowano cię zatrzymać, </p>
<p>Zmienić bieg, kierunek i nazwę. </p>
<p>Miałaś być rzeką czerwoną, </p>
<p>My toczyliśmy o ciebie walkę. </p>
<p>Dziś znów jesteś naszą drogą, </p>
<p>Znaczoną przez krzyż i lilijkę, </p>
<p>Wędrujemy ku tym ideałom, </p>
<p>Śpiewając o tobie piosenkę. </p>

<br/>
<p>Płyń nam zawsze... </p>
<br/>
</MDBCardBody>
</MDBCard>          
              </MDBContainer>
              </MDBContainer>
            </React.Fragment>
        );
    }
}

export default SongPage;