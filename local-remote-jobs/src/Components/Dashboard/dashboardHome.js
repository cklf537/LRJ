import React, { Component } from "react";
import Search  from "../search/search";

class DashboardHome extends Component {

    render() {
        return (
            <React.Fragment>
                <h3 className="pb-2">Welcome Chandra!</h3>
                <Search />
            </React.Fragment>
        );
    }
}

export default DashboardHome;