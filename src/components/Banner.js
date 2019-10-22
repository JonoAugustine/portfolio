import React, { Component } from 'react';
import '../assets/style/banner.css'

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <h5>{this.props.header}</h5>
            </div>
        );
    }
}

export default Banner;