import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { movies } from '../actions/movies';
import { events } from '../actions/events';



class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      searchValue:''
    }
  }

  gotoPage(category){
    this.setState({searchValue:''});
    if(category === 'latest'){
      this.props.history.push('/latestMovies');
    }
    else if(category === 'upcoming'){
      this.props.history.push('/upcomingMovies');
    }
    else{
      this.props.history.push('/latestEvents');
    }
  }
  gotoHome(){
    this.props.history.push('/');
  }
  startSearch(e){
    const {pageName} = this.props;
    if(pageName === '/latestMovies' || pageName === '/'){
      let filterData = this.props.latestMoviesCopy.filter(function(item) {
        return ((item.name.toUpperCase()).startsWith(e.target.value.toUpperCase()));
      });
      this.props.setlatestMovies(filterData);
      this.setState({searchValue:e.target.value});
    }
    else if(pageName === '/upcomingMovies'){
      let filterData = this.props.upcomingMoviesCopy.filter(function(item) {
        return ((item.name.toUpperCase()).startsWith(e.target.value.toUpperCase()));
      });
      this.props.setUpcomingMovies(filterData);
      this.setState({searchValue:e.target.value});
    }
    else if(pageName === '/latestEvents'){
      let filterData = this.props.eventsCopy.filter(function(item) {
        return ((item.name.toUpperCase()).startsWith(e.target.value.toUpperCase()));
      });
      this.props.setEvents(filterData);
      this.setState({searchValue:e.target.value});
    }
  }
  render() {
    const {pageName} = this.props;
    let showSearch = false;
    if(pageName === '/' || pageName === '/upcomingMovies' || pageName === '/latestMovies' || pageName === '/latestEvents'){
      showSearch = true;
    }
    return (
      <div className="header">
        <AppBar position="relative">
          <Toolbar>
            <div className="header-content">
              <Typography variant="h6" color="inherit" className="e-cube" noWrap onClick={this.gotoHome.bind(this)}>
                E Cube
                </Typography>


              <div className="menu-bar">
                <span className={pageName === '/latestMovies' ? "headerOption show-highlight" : "headerOption"} onClick={this.gotoPage.bind(this,'latest')}>Latest Movies</span>
                <span className={pageName === '/upcomingMovies' ? "headerOption show-highlight" : "headerOption"} onClick={this.gotoPage.bind(this,'upcoming')}>UpComing Movies</span>
                <span className={pageName === '/latestEvents' ? "headerOption show-highlight" : "headerOption"} onClick={this.gotoPage.bind(this,'events')}>Latest Events</span>
                {showSearch ?
                <div className="form-group" style={{ marginBottom: '0px' }}>
                  <input type="text" placeholder="Search" className="form-control" value={this.state.searchValue} onChange={this.startSearch.bind(this)}></input>
                </div>
                :null}
              </div>
            </div>

          </Toolbar>
        </AppBar>
      </div>

    )
  }
}

function mapState(state) {
  const {movieReducer, eventReducer } = state;
  const latestMoviesCopy = movieReducer.latestCopy;
  const upcomingMoviesCopy = movieReducer.upComingCopy;
  const eventsCopy = eventReducer.eventsCopy;
  const pageName = movieReducer.pageName;

  return{latestMoviesCopy,upcomingMoviesCopy,eventsCopy, pageName};
    
}
const actionCreators = {
  setlatestMovies: movies.setlatestMovies,
  setUpcomingMovies: movies.setUpcomingMovies,
  setEvents: events.setEvents
  };


export default compose(
  withRouter,
  connect(mapState, actionCreators)
)(HeaderComponent);