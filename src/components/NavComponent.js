import React, {Component} from 'react';

import "./styles/Navigation.css"

class NavComponent extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light NavHeader">
                <a className="navbar-brand" href="#" NavText>WELCOME TO COGNIZEATZ</a>
                <div className="Image">

                <img className="Content" src={"https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/c8/4c/0f/c84c0ff7-2edc-3aa0-31bd-a343613e643f/source/512x512bb.jpg"}/>
                </div>
            </nav>
        );
    }
}

export default NavComponent;