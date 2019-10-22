import React, { Component } from 'react';
import '../assets/style/root.css'

class Content extends Component {
    render() {
        return (
            <div className="content">
                {this.props.child}
            </div>
        );
    }
}

export default Content;