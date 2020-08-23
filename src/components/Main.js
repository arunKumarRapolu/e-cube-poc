import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { LoadingOverlay, Loader } from 'react-overlay-loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import 'react-overlay-loader/styles.css';

class Main extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
            <LoadingOverlay style={{ height: window.innerHeight, backgroundColor: 'papayawhip' }}> 
            <div className="app-main">
                <HeaderComponent />
                <div className="app-content">
                {this.props.children}
                </div>
               
                <FooterComponent />
            </div>
            <Loader loading={this.props.showLoader}/>
            </LoadingOverlay>
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} newestOnTop={false} rtl={false}/>
            </>
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