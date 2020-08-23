import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { Button, Row, Col, Form } from 'react-bootstrap';
import { movies } from '../actions/movies';
// import DatePicker from "react-datepicker";
import DateFnsUtils from '@date-io/date-fns';
import FormControl from '@material-ui/core/FormControl';
import {
    DatePicker,
} from '@material-ui/pickers';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import "react-datepicker/dist/react-datepicker.css";
import Card from '@material-ui/core/Card';


class BookingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioSelected: null,
            radioSelectedVal: null,
            selectSlotError: false,
            dateSelected: null,
            noOfSeats: 1,
            isDateSelcted: true,
            availableShows: [
                { id: 1, time: "10:00 AM" },
                { id: 2, time: "02:00 PM" },
                { id: 3, time: "05:30 PM" },
                { id: 4, time: "09:30 PM" }
            ]
        }
    }

    componentDidMount() {
        this.props.savePage(this.props.location.pathname);
    }

    handleChange = date => {
        this.setState({
            dateSelected: date,
            isDateSelcted: true
        });
    };

    slotSelected(id, evt) {
        this.setState({ radioSelected: id, radioSelectedVal: evt.target.value, selectSlotError: false });
    }

    seatsSelected(e) {
        this.setState({ noOfSeats: e.target.value });
    }

    gotoConfirmation() {
        let proceed = true;
        if (this.state.dateSelected === null) {
            this.setState({ isDateSelcted: false });
            proceed = false;
        }
        if (this.state.radioSelectedVal === null) {
            this.setState({ selectSlotError: true });
            proceed = false;
        }
        if (!proceed) {
            return;
        }
        let dateStr = new Date(this.state.dateSelected).getDate() + "/" + (new Date(this.state.dateSelected).getMonth() + 1) + "/" + new Date(this.state.dateSelected).getFullYear();
        let bookingData = {
            date: dateStr,
            showTime: this.state.radioSelectedVal,
            noOfSeats: this.state.noOfSeats,
            movieName: this.props.movieInfo.name
        }
        this.props.saveUserSelects(bookingData);
        this.props.history.push('/confirmation');
    }

    render() {
        const renderShows = this.state.availableShows.map((val, key) => {
            let idN = "radio" + key;
            return (
                <Col md="3" className="p-0" key={key}>
                    {/* <div className="form-check">
                        <input data-test="input" type="radio" className="slotRadio" id={idN} value={val.time} onChange={this.slotSelected.bind(this, key)} checked={this.state.radioSelected == key ? true : false} />
                        <label className="slotRadioLabel" for={idN} data-error="" data-success="" id="">{val.time}</label>
                    </div> */}

                    <FormControlLabel value={val.time} onChange={this.slotSelected.bind(this, key)} checked={this.state.radioSelected == key ? true : false} control={<Radio color="primary" />} label={val.time} />

                </Col>
            )
        });
        return (
            <React.Fragment>
                <div className="booking-page">
                    <div className="container">
                        <Card style={{ padding: '24px 30px' }}>
                            <Row className="bookingpadding">
                                <Col md="3" className="align-self-center">Select Date :</Col>
                                <Col md="6" className="p-0">
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <FormControl>
                                            <KeyboardDatePicker
                                                margin="normal"
                                                id="date-picker-dialog"
                                                autoOk
                                                disableFuture
                                                margin="0px"
                                                placeholder="select Date"
                                                format="MM/dd/yyyy"
                                                inputVariant="outlined"
                                                value={this.state.dateSelected}
                                                onChange={this.handleChange} KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </FormControl>
                                    </MuiPickersUtilsProvider>
                                    {!this.state.isDateSelcted ? <div className="errorMsg">Please select Date</div> : null}
                                </Col>
                            </Row>
                            <Row className="bookingpadding">
                                <Col md="3" className="align-self-center">
                                    Available show Timings:
                    </Col>
                                <Col md="6" className="p-0">
                                    <Row style={{ marginLeft: '2px' }}>
                                        {renderShows}
                                    </Row>
                                    {this.state.selectSlotError ? <div className="errorMsg">Please select Time</div> : null}
                                </Col>
                            </Row>
                            <Row className="bookingpadding">
                                <Col md="3" className="align-self-center">
                                    Select Number of seats:
                    </Col>
                                <Col md="6" className="p-0" >
                                    <Form.Control as="select" style={{ height: '40px' }} size="sm" custom onChange={this.seatsSelected.bind(this)}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <Row className="bookingpadding">
                                <Col><Button variant="primary" onClick={this.gotoConfirmation.bind(this)}>Book Now</Button></Col>
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
    const movieInfo = movieReducer.movieInfo;

    return { movieInfo };

}

const actionCreators = {
    saveUserSelects: movies.saveUserSelects,
    savePage: movies.savePage
};

export default compose(
    withRouter,
    connect(mapState, actionCreators)
)(BookingPage);