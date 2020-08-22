import React, { Component } from "react";
import Card from '@material-ui/core/Card';

class DetailPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="detailsPage" style={{ padding: '40px' }}>

                <div className="container">
                    <Card>

                        <div className="row">
                            <div className="col-md-4">
                                <img style={{ height: '200px' }} src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg" />
                            </div>
                            <div className="col-md-8 p-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Movie Name</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Relesed Date</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p>Movie Duration</p>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-12">
                                    <p>Ratings</p>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-md-12">
                                    <p>Book Now</p>
                                </div>
                                </div>
                            </div>
                        </div>

                    </Card>

                </div>
            </div>
        )
    }
}

export default DetailPage;