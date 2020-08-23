import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { Row, Col } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import Card from '@material-ui/core/Card';
import { movies } from '../actions/movies';


class ConfirmationPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.savePage(this.props.location.pathname);
    }

    render() {
        const { bookingData } = this.props;
        return (
            <React.Fragment>
                <div className="overall-page">
                    <div className="listPageHead">
                    {/* <i className="fa fa-check-circle" aria-hidden="true"></i> */}
                        {/* <img  style={{ height: '150px',width:'100%' }}  src="https://www.kindpng.com/picc/m/431-4312134_transparent-success-icon-hd-png-download.png"/> */}
                        Your Booking has been successful</div>
                    <div className="container" style={{ padding: '20px' }}>
                        <Card style={{ padding: '25px' }}>
                            <Row>
                                <Col md="3">
                                    <QRCode style={{ height: '100%', width: '100%' }} value={JSON.stringify(bookingData)} />
                                    {/* <img style={{ height: '150px',width:'100%' }} src="https://lh3.googleusercontent.com/proxy/JeZ-HUDyWZlCTuwTWM4EcoM9T6dyC--TefNd9KvcvgdLxYdPYBO2HyKa-3y8VKhebgRM-s0zLGmsJrVgB7h9Q0XDTo-ThhpjdoYUYUl7he0JsBs7HIYvCFAi" /> */}
                                </Col>
                                <Col md="6">
                                    <div className="row rowpadding">
                                        <div className="col-md-12">
                                            <p className="labelColor"> Movie Name:
                                                <span className="labelValue">{bookingData.movieName}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row rowpadding ">
                                        <div className="col-md-12">
                                            <p className="labelColor"> Date:
                                                <span className="labelValue">{bookingData.date}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row rowpadding ">
                                        <div className="col-md-12">
                                            <p className="labelColor"> Time:
                                                <span className="labelValue">{bookingData.showTime}</span>
                                            </p>
                                        </div>

                                    </div>
                                    <div className="row rowpadding ">
                                        <div className="col-md-12">
                                            <p className="labelColor">Total Seats:
                                                <span className="labelValue" >{bookingData.noOfSeats}</span>
                                            </p>
                                        </div>
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

const actionCreators = {
    savePage: movies.savePage
};

export default compose(
    withRouter,
    connect(mapState, actionCreators)
)(ConfirmationPage);
