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
    let pageName = 'home';
    if(this.props.location.pathname === '/latestMovies'){
      pageName = 'latest';
    }
    else if(this.props.location.pathname === '/upcomingMovies'){
      pageName = 'upcoming';
    }
    else if(this.props.location.pathname === '/latestEvents'){
      pageName = 'events';
    }
    this.state={
      selectedPage:pageName,
      searchValue:''
    }
  }
  gotoPage(category){
    if(category === 'latest'){
      this.setState({selectedPage:'latest',searchValue:''});
      this.props.history.push('/latestMovies');
    }
    else if(category === 'upcoming'){
      this.setState({selectedPage:'upcoming',searchValue:''});
      this.props.history.push('/upcomingMovies');
    }
    else{
      this.setState({selectedPage:'events',searchValue:''});
      this.props.history.push('/latestEvents');
    }
  }
  gotoHome(){
    this.setState({selectedPage:'home'});
    this.props.history.push('/');
  }
  startSearch(e){
    if(this.state.selectedPage === 'latest' || this.state.selectedPage === 'home'){
      let filterData = this.props.latestMoviesCopy.filter(function(item) {
        return ((item.name.toUpperCase()).startsWith(e.target.value.toUpperCase()));
      });
      this.props.setlatestMovies(filterData);
      this.setState({searchValue:e.target.value});
    }
    else if(this.state.selectedPage === 'upcoming'){
      let filterData = this.props.upcomingMoviesCopy.filter(function(item) {
        return ((item.name.toUpperCase()).startsWith(e.target.value.toUpperCase()));
      });
      this.props.setUpcomingMovies(filterData);
      this.setState({searchValue:e.target.value});
    }
    else if(this.state.selectedPage === 'events'){
      let filterData = this.props.eventsCopy.filter(function(item) {
        return ((item.name.toUpperCase()).startsWith(e.target.value.toUpperCase()));
      });
      this.props.setEvents(filterData);
      this.setState({searchValue:e.target.value});
    }
  }
  render() {
    return (
      <div className="header">
        <AppBar position="relative">
          <Toolbar>
            <div className="header-content">
              <Typography variant="h6" color="inherit" className="e-cube" noWrap onClick={this.gotoHome.bind(this)}>
                E Cube
                </Typography>


              <div className="menu-bar">
                <span className="headerOption" onClick={this.gotoPage.bind(this,'latest')}>Latest Movies</span>
                <span className="headerOption" onClick={this.gotoPage.bind(this,'upcoming')}>UpComing Movies</span>
                <span className="headerOption" onClick={this.gotoPage.bind(this,'events')}>Latest Events</span>
                <div className="form-group" style={{ marginBottom: '0px' }}>
                  <input type="text" placeholder="Search" className="form-control" value={this.state.searchValue} onChange={this.startSearch.bind(this)}></input>
                </div>
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

  return{latestMoviesCopy,upcomingMoviesCopy,eventsCopy};
    
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