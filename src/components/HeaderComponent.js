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

class HeaderComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <AppBar position="relative">
                <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    E Cube
                </Typography>
                <Button aria-controls="simple-menu" aria-haspopup="true">
  Open Menu
</Button>

<Button aria-controls="simple-menu" aria-haspopup="true">
  Open Menu
</Button>

<Button aria-controls="simple-menu" aria-haspopup="true">
  Open Menu
</Button>
                <form className="headerSearchBar" noValidate autoComplete="off">
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form>

                </Toolbar>
            </AppBar>
        )
    }
}

export default HeaderComponent;