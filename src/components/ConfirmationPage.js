import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import { Row, Col } from 'react-bootstrap';

class ConfirmationPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="listPageHead">Your Booking has been successful</div>
                <Row>
                    <Col md="6">
                        QR Code comes here
                    </Col>
                    <Col md="6">
                        <div>{this.props.bookingData.movieName}</div>
                        <div>Date : {this.props.bookingData.date}</div>
                        <div>Time : {this.props.bookingData.showTime}</div>
                        <div>Total Seats : {this.props.bookingData.noOfSeats}</div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}


function mapState(state) {
    const {movieReducer } = state;
    const bookingData = movieReducer.userSelectedInfo;
  
    return{bookingData};
      
  }
  export default compose(
      withRouter,
      connect(mapState, '')
    )(ConfirmationPage);
