import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { Row, Col } from 'react-bootstrap';
import Card from '@material-ui/core/Card';


class ConfirmationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="confirmation-page" style={{ width: '100%' }}>
                    <div className="listPageHead">Your Booking has been successful</div>
                    <div className="container">
                        <Card>

                            <Row>
                                <Col md="3">

                                    <img style={{ height: '150px',width:'100%' }} src="https://lh3.googleusercontent.com/proxy/JeZ-HUDyWZlCTuwTWM4EcoM9T6dyC--TefNd9KvcvgdLxYdPYBO2HyKa-3y8VKhebgRM-s0zLGmsJrVgB7h9Q0XDTo-ThhpjdoYUYUl7he0JsBs7HIYvCFAi" />
                                </Col>
                                <Col md="6" className="p-0">
                                    <div className="row ">
                                        <div className="col-md-12">
                                           Movie Name: {this.props.bookingData.movieName}                                                </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-md-12">
                                            Date : {this.props.bookingData.date}
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-md-12">
                                            Time : {this.props.bookingData.showTime}                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-md-12">
                                            Total Seats : {this.props.bookingData.noOfSeats}                                        </div>
                                    </div>
                                  
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


function mapState(state) {
    const { movieReducer } = state;
    const bookingData = movieReducer.userSelectedInfo;

    return { bookingData };

}
export default compose(
    withRouter,
    connect(mapState, '')
)(ConfirmationPage);
