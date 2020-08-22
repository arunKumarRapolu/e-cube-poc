import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { Card, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class CardComponent extends Component {
    constructor(props){
        super(props);
    }

    gotoDetails(id){
      this.props.history.push('/details/'+id)
    }

    render() {
      const {data} = this.props;
        return (
            <Grid item md={3} sm={12}>
            <Card style={{ width: '18rem', cursor:'pointer' }} onClick={this.gotoDetails.bind(this,data._id)}>
              <Card.Img variant="top" src={data.imageUrl} />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Grid>
        )
    }
}

export default compose(
  withRouter,
  connect('', '')
)(CardComponent);
