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




class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }
  gotoPage(category){
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
  render() {
    return (
      <div className="header">
        <AppBar position="relative">
          <Toolbar style={{backgroundColor: '#333545'}}>
            <div className="header-content container">
              <Typography variant="h6" color="inherit" noWrap>
                E Cube
                </Typography>


              <div className="menu-bar">
                <span className="headerOption" onClick={this.gotoPage.bind(this,'latest')}>Latest Movies</span>
                <span className="headerOption" onClick={this.gotoPage.bind(this,'upcoming')}>UpComing Movies</span>
                <span className="headerOption" onClick={this.gotoPage.bind(this,'events')}>Latest Events</span>
                <div className="form-group" style={{ marginBottom: '0px' }}>
                  <input type="text" placeholder="Search" className="form-control" value={this.state.searchValue} onChange={this.startSearch.bind(this)}></input>
                  {/* header change */}
                </div>
              </div>
            </div>

          </Toolbar>
        </AppBar>
      </div>

    )
  }
}


export default compose(
  withRouter,
  connect('', '')
)(HeaderComponent);