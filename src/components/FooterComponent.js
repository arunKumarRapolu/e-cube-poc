import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class FooterComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
      <footer >
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </footer>
        )
    }
}

export default FooterComponent;