import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { Carousel, Card, Button } from 'react-bootstrap';
import Container from '@material-ui/core/Container';



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
              src="https://www.desktopbackground.org/p/2013/07/25/612889_iron-man-wallpapers-image-gallery-hd-wallpapers-1080p_1920x1080_h.jpg"
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
                <Card.Img variant="top" src="https://www.desktopbackground.org/p/2013/07/25/612889_iron-man-wallpapers-image-gallery-hd-wallpapers-1080p_1920x1080_h.jpg" />
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

}
// const actionCreators = {
//     getMovies: movies.getLatest,
//   };
// export default compose(
//     withRouter,
//     connect(mapState, actionCreators)
//   )(HomePage);

export default HomePage;