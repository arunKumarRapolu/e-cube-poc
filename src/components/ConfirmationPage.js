import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import { Row, Col } from 'react-bootstrap';
import QRCode from 'qrcode.react';

class ConfirmationPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {bookingData} = this.props;
        return (
            <React.Fragment>
                <div className="listPageHead">Your Booking has been successful</div>
                <Row>
                    <Col md="6">
                        <QRCode value={JSON.stringify(bookingData)}/>
                    </Col>
                    <Col md="6">
                        <div>{bookingData.movieName}</div>
                        <div>Date : {bookingData.date}</div>
                        <div>Time : {bookingData.showTime}</div>
                        <div>Total Seats : {bookingData.noOfSeats}</div>
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
