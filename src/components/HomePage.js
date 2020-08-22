import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { Carousel, Card, Button } from 'react-bootstrap';



class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //     this.props.getMovies()
  // }

  render() {
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

        <Grid container style={{ padding: '20px' }}>
          <Grid item md={3} sm={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
    </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item md={3} sm={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
    </Card.Text>
    <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item md={3} sm={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
    </Card.Text>
    <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Grid>

          <Grid item md={3} sm={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
    </Card.Text>
    <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Grid>

        </Grid>


      </div>
    )
  }
}

function mapState(state) {

}
// const actionCreators = {
//     getMovies: movies.getLatest,
//   };
// export default compose(
//     withRouter,
//     connect(mapState, actionCreators)
//   )(HomePage);

export default HomePage;