import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { movies } from '../actions/movies';
import CardComponent from "./common/Card";
import Grid from '@material-ui/core/Grid';
import { Row, Col } from 'react-bootstrap';


class UpcomingMovies extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMovies();
        this.props.savePage(this.props.location.pathname);
    }

    render() {
        const renderMovies = this.props.upcomingMovies.map((movie, i) => {
            return (
                <CardComponent key={i} data={movie} />
            )
        });
        return (
            <React.Fragment>
                <div className="overall-page">
                    <div className="listPageHead">Upcoming Movies</div>
                    <div className="container" style={{ padding: '20px' }}>
                    <Row>

                        {this.props.upcomingMovies.length > 0 ?
                            renderMovies :
                            <div className="nodata">
                                No Movies Found
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
    const { movieReducer } = state;
    const upcomingMovies = movieReducer.upComing;
  
    return{upcomingMovies};
      
  }
  const actionCreators = {
      getMovies: movies.getUpcoming,
      savePage: movies.savePage
    };
  export default compose(
      withRouter,
      connect(mapState, actionCreators)
    )(UpcomingMovies);
