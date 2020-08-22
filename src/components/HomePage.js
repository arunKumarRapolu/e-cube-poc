import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

import { Carousel, Card, Button } from 'react-bootstrap';
import { movies } from '../actions/movies';


class HomePage extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getMovies()
    }

    render() {
        return (
            <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.collider.com/wp-content/uploads/2012/05/dark-knight-rises-movie-poster-banner-catwoman.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.collider.com/wp-content/uploads/2012/05/dark-knight-rises-movie-poster-banner-catwoman.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.collider.com/wp-content/uploads/2012/05/dark-knight-rises-movie-poster-banner-catwoman.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</>
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
  )(HomePage);

//export default HomePage;