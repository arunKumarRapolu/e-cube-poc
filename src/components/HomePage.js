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
        <div className="homePage-recommand"> Recommended Movies</div>
        <div className="container" style={{ padding: '20px' }}>
          <div className="row">
          {this.props.latestMovies.length > 0 ?
            renderRecommandedMovies:
            <div className="nodata">
                No Movies Found
            </div>
          }
          </div>
        </div>
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