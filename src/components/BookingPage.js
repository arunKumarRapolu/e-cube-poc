import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import { Button, Row, Col, Form } from 'react-bootstrap';
import { movies } from '../actions/movies';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class BookingPage extends Component {
    constructor(props){
        super(props);
        this.state={
            radioSelected:null,
            radioSelectedVal:null,
            selectSlotError:false,
            dateSelected:'',
            noOfSeats:1,
            isDateSelcted: true,
            availableShows:[
                {id:1,time:"10:00 AM"},
                {id:2,time:"02:00 PM"},
                {id:3,time:"05:30 PM"},
                {id:4,time:"09:30 PM"}
            ]
        }
    }

    handleChange = date => {
        this.setState({
            dateSelected: date,
            isDateSelcted:true
        });
    };

    slotSelected(id,evt){
        this.setState({radioSelected : id, radioSelectedVal:evt.target.value,selectSlotError:false});
    }

    seatsSelected(e){
        this.setState({noOfSeats:e.target.value});
    }

    gotoConfirmation(){
        let proceed = true;
        if(this.state.dateSelected === ''){
            this.setState({isDateSelcted: false});
            proceed = false;
        }
        if(this.state.radioSelectedVal === null){
            this.setState({selectSlotError: true});
            proceed = false;
        }
        if(!proceed){
            return;
        }
        let dateStr = new Date(this.state.dateSelected).getDate() + "/" + (new Date(this.state.dateSelected).getMonth()+1) + "/" + new Date(this.state.dateSelected).getFullYear();
        let bookingData = {
            date:dateStr,
            showTime:this.state.radioSelectedVal,
            noOfSeats:this.state.noOfSeats,
            movieName: this.props.movieInfo.name
        }
        this.props.saveUserSelects(bookingData);
        this.props.history.push('/confirmation');
    }

    render() {
        const renderShows = this.state.availableShows.map((val,key) => {
            let idN = "radio"+key;
            return(
                <Col md="3" key={key}>
                    <div className="form-check">
                    <input data-test="input" type="radio" className="slotRadio" id={idN} value={val.time} onChange={this.slotSelected.bind(this,key)} checked={this.state.radioSelected == key ? true:false} />
                        <label className="slotRadioLabel" htmlFor={idN} data-error="" data-success="" id="">{val.time}</label>
                    </div>
                </Col>
            )
        });
        return (
            <React.Fragment>
                <Row>
                    <Col md="4">Select Date :</Col>
                    <Col md="8">
                        <DatePicker
                            selected={this.state.dateSelected}
                            onChange={this.handleChange}
                            minDate={new Date()}
                        />
                        {!this.state.isDateSelcted ? <div className="errorMsg">Please select Date</div> : null}
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        Available show Timings: 
                    </Col>
                    <Col md="8">
                        <Row>
                            {renderShows}
                        </Row>
                        {this.state.selectSlotError ? <div className="errorMsg">Please select Time</div> : null }
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        Select Number of seats:
                    </Col>
                    <Col md="8">
                    <Form.Control as="select" size="sm" custom onChange={this.seatsSelected.bind(this)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    </Col>
                </Row>
                <Row>
                <Col><Button variant="primary" onClick={this.gotoConfirmation.bind(this)}>Book Now</Button></Col>
                </Row>
            </React.Fragment>
        )
    }
}

function mapState(state) {
    const {movieReducer } = state;
    const movieInfo = movieReducer.movieInfo;
  
    return{movieInfo};
      
  }

  const actionCreators = {
        saveUserSelects : movies.saveUserSelects
    };

export default compose(
    withRouter,
    connect(mapState, actionCreators)
  )(BookingPage);