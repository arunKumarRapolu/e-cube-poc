import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {Button, Row, Col } from 'react-bootstrap';
import { movies } from '../actions/movies';

class DetailPage extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getDetails(this.props.match.params.id)
    }

    gotoBooking(data){
        this.props.saveBookingInfo(data);
        this.props.history.push('/booking');
    }

    render() {
        let data = {"_id":"5ab12612f36d2879268f284a","name":"Black Panther","language":"ENGLISH","rate":4.5,"type":"Action Adventure Fantasy","imageUrl":"https://image.ibb.co/f0hhZc/bp.jpg"}
        return (
           <React.Fragment>
               {
                   Object.keys(this.props.details).length > 0 ?
                   <React.Fragment>
                   <Row>
                       <Col md="4">
                       <img src={data.imageUrl}/>
                       </Col>
                       <Col md="8">
                           <Row>
                               <Col md="6">
                                   {data.name}
                               </Col>
                               <Col md="6">
                                    Language: {data.language}
                               </Col>
                           </Row>
                           <Row>
                               <Col>
                               Type: {data.type}
                               </Col>
                           </Row>
                           <Row>
                               <Col>
                               Rating: {data.rate}
                               </Col>
                           </Row>
                       </Col>
                   </Row>
                   <Row>
                        <Col><Button variant="primary" onClick={this.gotoBooking.bind(this,data)}>Book Now</Button></Col>
                   </Row>
                   </React.Fragment> :
                   <div className="noDetails">
                       No Details Found
                    </div>
               }
           </React.Fragment>
        )
    }
}

function mapState(state) {
    const {movieReducer } = state;
    const details = movieReducer.details;
  
    return{details};
      
  }
  const actionCreators = {
        saveBookingInfo : movies.saveBookingInfo,
        getDetails: movies.getDetails,
    };
  export default compose(
      withRouter,
      connect(mapState, actionCreators)
    )(DetailPage);
  