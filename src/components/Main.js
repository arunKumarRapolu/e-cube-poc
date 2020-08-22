import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";


class Main extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                {this.props.children}
                <FooterComponent />
            </div>
        )
    }
}

export default Main;