import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";


class Main extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="app-main">
                <HeaderComponent />
                <div className="app-content">
                {this.props.children}
                </div>
               
                <FooterComponent />
            </div>
        )
    }
}

export default Main;