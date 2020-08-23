import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { Button, Row, Col } from 'react-bootstrap';
import { movies } from '../actions/movies';

class DetailPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getDetails(this.props.match.params.id);
        this.props.savePage(this.props.location.pathname);
    }

    gotoBooking(data) {
        this.props.saveBookingInfo(data);
        this.props.history.push('/booking');
    }

    render() {
        let data = { "_id": "5ab12612f36d2879268f284a", "name": "Black Panther", "language": "ENGLISH", "rate": 4.5, "type": "Action Adventure Fantasy", "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg" }
        return (



            < div className="detailsPage" style={{ padding: '40px', width: '100%' }
            }>

                <div className="container">
                    {
                        Object.keys(this.props.details).length > 0 ?
                            (
                                <Card>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img src={data.imageUrl} style={{ width: '100%' }} />
                                        </div>
                                        <div className="col-md-9 p-3">
                                            <div className="row rowpadding">
                                                <div className="col-md-6">
                                                    <p className="labelColor">Movie Name :
                                                        <span className="labelValue">{data.name}</span>
                                                    </p>
                                                </div>

                                                <div className="col-md-6">
                                                    <p className="labelColor">Language :
                                                        <span className="labelValue">{data.language}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row rowpadding">
                                                <div className="col-md-12">
                                                    <p className="labelColor">Type :
                                                        <span className="labelValue">{data.type}</span>
                                                    </p>
                                                </div>


                                            </div>
                                            <div className="row rowpadding">
                                                <div className="col-md-12">
                                                <p className="labelColor">Rating :
                                                        <span className="labelValue">{data.rate}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row rowpadding">
                                                <div className="col-md-12">
                                                    <Button variant="primary" onClick={this.gotoBooking.bind(this, data)}>Book Now</Button>                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Card>
                            ) : (
                                <div className="noDetails">
                                    No Details Found
                                </div>
                            )

                    }

                </div>
            </div >





        )
    }
}

function mapState(state) {
    const { movieReducer } = state;
    const details = movieReducer.details;
    
    return { details };

}
const actionCreators = {
    saveBookingInfo: movies.saveBookingInfo,
    getDetails: movies.getDetails,
    savePage: movies.savePage
};
export default compose(
    withRouter,
    connect(mapState, actionCreators)
)(DetailPage);
