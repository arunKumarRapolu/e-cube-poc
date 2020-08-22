import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Grid from '@material-ui/core/Grid';
import { Carousel, Card, Button } from 'react-bootstrap';
import { movies } from '../actions/movies';
import CardComponent from "./common/Card";

class HomePage extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getMovies()
    }

  render() {

    let dataA = [{"_id":"5ab12612f36d2879268f284a","name":"Black Panther","language":"ENGLISH","rate":4.5,"type":"Action Adventure Fantasy","imageUrl":"https://image.ibb.co/f0hhZc/bp.jpg"},
    {"_id":"5ab12666f36d2879268f2902","name":"Death Wish","language":"ENGLISH","type":"Action Crime Thriller","rate":3.2,"imageUrl":"https://image.ibb.co/gC9PfH/dw.jpg"},
    {"_id":"5ab12678f36d2879268f291d","name":"Coco","language":"ENGLISH","type":"Adventure Animation Family","rate":5,"imageUrl":"https://image.ibb.co/dQwWSx/coco.jpg"},
    {"_id":"5ab12666f36d2879268f2902","name":"Death Wish","language":"ENGLISH","type":"Action Crime Thriller","rate":3.2,"imageUrl":"https://image.ibb.co/gC9PfH/dw.jpg"},
    {"_id":"5ab12678f36d2879268f291d","name":"Coco","language":"ENGLISH","type":"Adventure Animation Family","rate":5,"imageUrl":"https://image.ibb.co/dQwWSx/coco.jpg"},
    {"_id":"5ab12666f36d2879268f2902","name":"Death Wish","language":"ENGLISH","type":"Action Crime Thriller","rate":3.2,"imageUrl":"https://image.ibb.co/gC9PfH/dw.jpg"},
    {"_id":"5ab12678f36d2879268f291d","name":"Coco","language":"ENGLISH","type":"Adventure Animation Family","rate":5,"imageUrl":"https://image.ibb.co/dQwWSx/coco.jpg"}]

    // const renderRecommandedMovies = this.props.latestMovies.map((movie,i) => {
    //   return(
    //     <CardComponent data={movie}/>
    //   )
    // });

    const renderRecommandedMovies = dataA.map((movie,i) => {
      return(
        <CardComponent key={i} data={movie}/>
      )
    });
    return (
      <div className="main-page">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.collider.com/wp-content/uploads/2012/05/dark-knight-rises-movie-poster-banner-catwoman.jpg"
              alt="First slide"
            />
         
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.collider.com/wp-content/uploads/2012/05/dark-knight-rises-movie-poster-banner-catwoman.jpg"
              alt="Third slide"
            />

          
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.collider.com/wp-content/uploads/2012/05/dark-knight-rises-movie-poster-banner-catwoman.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Grid className="container" style={{ padding: '20px' }}>
          <div className="row">
            <div className="col-3">
              <Card>
                <Card.Img variant="top" 
                 src="https://www.desktopbackground.org/p/2013/07/25/612889_iron-man-wallpapers-image-gallery-hd-wallpapers-1080p_1920x1080_h.jpg"
                 alt="First slide" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                </Card.Body>
                <Button variant="primary">Book Now</Button>

              </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                </Card.Body>
                <Button variant="primary">Book Now</Button>

              </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src="https://i1.wp.com/www.techbuzzonline.com/wp-content/uploads/2018/06/19-Doctor-Strange-Marvel-Comic-HD-Wallpaper.jpg?resize=800%2C450&ssl=1" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                </Card.Body>
                <Button variant="primary">Book Now</Button>

              </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdaJoP_FYS3flfrEua5GeZ8CE7O3aROOFK0Q&usqp=CAU" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                </Card.Body>
                <Button variant="primary">Book Now</Button>

              </Card>
            </div>

          </div>
        </Grid>

      </div>
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
