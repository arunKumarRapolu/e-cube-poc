import React, { Component } from "react";
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

  render() {
    return (
      <div className="header">
        <AppBar position="relative">
          <Toolbar>
            <div className="header-content">
              <Typography variant="h6" color="inherit" noWrap>
                E Cube
                </Typography>


              <div className="menu-bar">
                <span>Latest Movies</span>
                <span>UpComing Movies</span>
                <span>Latest Events</span>
                <div className="form-group" style={{ marginBottom: '0px' }}>
                  <input type="text" placeholder="Search" className="form-control"></input>
                </div>
              </div>
            </div>

          </Toolbar>
        </AppBar>
      </div>

    )
  }
}

export default HeaderComponent;