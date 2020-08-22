import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import { movies } from '../actions/movies';
import CardComponent from "./common/Card";
import Grid from '@material-ui/core/Grid';

class LatestMovies extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getMovies()
    }
    render() {

        const renderMovies = this.props.latestMovies.map((movie,i)=>{
            return (
                <CardComponent key={i} data={movie}/>
            )
        });
        return (
            <React.Fragment>
            <div className="listPageHead">Latest Movies</div>
            <Grid container style={{ padding: '20px' }}>
                {this.props.latestMovies.length > 0 ?
                    renderMovies :
                    <div className="nodata">
                        No Movies Found
                    </div>
                }
            </Grid>
            </React.Fragment>
        )
    }
}

function mapState(state) {
    const {movieReducer } = state;
    const latestMovies = movieReducer.latest;
  
    return{latestMovies};
      
  }
  const actionCreators = {
      getMovies: movies.getLatest,
    };
  export default compose(
      withRouter,
      connect(mapState, actionCreators)
    )(LatestMovies);