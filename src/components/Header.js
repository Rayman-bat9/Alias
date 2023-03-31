import React from "react";

class Header extends React.Component{
    render () {
        return(
            <div className="header">
                <header>{this.props.title}</header>
            </div>
        )
    }
}

export default Header;