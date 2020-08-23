import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { events } from '../actions/events';
import { movies } from '../actions/movies';
import CardComponent from "./common/Card";
import Grid from '@material-ui/core/Grid';
import { Row, Col } from 'react-bootstrap';

class LatestEvents extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getEvents();
        this.props.savePage(this.props.location.pathname);
    }

    render() {
        const renderEvents = this.props.latestEvents.map((event, i) => {
            return (
                <CardComponent key={i} data={event} />
            )
        });
        return (
            <React.Fragment>
                <div className="overall-page">
                    <div className="listPageHead">Latest Events</div>
                    <div className="container" style={{ padding: '20px' }}>
                        <Row>                        {this.props.latestEvents.length > 0 ?
                            renderEvents :
                            <div className="nodata">
                                No Events Found
                    </div>
                        }
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function mapState(state) {
    const { eventReducer } = state;
    const latestEvents = eventReducer.events;
  
    return{latestEvents};
      
  }
  const actionCreators = {
      getEvents: events.getEvents,
      savePage: movies.savePage
    };
  export default compose(
      withRouter,
      connect(mapState, actionCreators)
    )(LatestEvents);
