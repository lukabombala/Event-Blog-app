import React, { Component } from "react";
import {MDBIcon} from 'mdb-react-ui-kit';

class FixedNewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            image: this.props.image,
            icon: this.props.icon,
            category: this.props.category,
            dateadd: this.props.dateadd,
            shortdescription: this.props.shortdescription,
            text: this.props.text,
        };
    }

    render() {
        return(
            <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}
                 className=""
              >
                
                <div className="d-flex justify-content-between">
                  <a href="#!" className="dark-grey-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon={this.state.icon} className="pr-2" />
                      {this.state.category}
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    {this.state.dateadd}
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">{this.state.title}</a>
                </h3>
                <p className="dark-grey-text">
                Już za 2 dni spotkamy się w Kamieńcu Ząbkowickim, aby wspólnie świętować XXX lat istnienia naszej chorągwi! <br/>
                Jeśli jeszcze nie jesteś przygotowana, to czas najwyższy zacząć pakować plecak, aby w piątek nic Cię nie zaskoczyło. <br/>
                A czy pamiętasz kto był pierwszą komendantką chorągwi? <br/>Albo kto jest patronem naszej 'Rzeki'? <br/>Na te pytania odpowiedzi mogą się przydać już w najbliższy weekend.
                <br/><br/>
                Druhno! <br/>
                Mamy nadzieję, że do zobaczenia!<br/><br/>
                </p>
                <h6>Kadra zlotu</h6>

                
                
            </div>
        );
    }
}



export default FixedNewsCard;