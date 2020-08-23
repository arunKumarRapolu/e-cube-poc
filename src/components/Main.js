import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { LoadingOverlay, Loader } from 'react-overlay-loader';
 
import 'react-overlay-loader/styles.css';

class Main extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <LoadingOverlay style={{ width: window.innerWidth, height: window.innerHeight, backgroundColor: 'papayawhip' }}> 
            <div className="app-main">
                <HeaderComponent />
                <div className="app-content">
                {this.props.children}
                </div>
               
                <FooterComponent />
            </div>
            <Loader loading={this.props.showLoader}/>
            </LoadingOverlay>
        )
    }
}

function mapState(state) {
    const { loaderReducer } = state;
    const showLoader = loaderReducer.showLoader;

    return { showLoader };

}

export default compose(
    withRouter,
    connect(mapState, '')
)(Main);