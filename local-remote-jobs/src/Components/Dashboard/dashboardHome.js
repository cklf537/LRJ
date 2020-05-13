import React, { Component } from "react";
import Search from "../search/search";

import axios from 'axios';

class DashboardHome extends Component {
    state = {
        tags: ""
    };
    componentDidMount() {
        let availableTags = []
        axios.get('https://remoteok.io/api?ref=producthunt')
            .then(res => {
                res.data.map(item => {
                    return item.tags !== undefined ? availableTags.push(item.tags) : null;
                })
                this.setState({
                    tags: availableTags
                })
            });
    };
    render() {
        let { tags } = this.state;
        let filteredTags = tags.toString().split(',').slice(0,50);
        return (
            <React.Fragment>
                <h3 className="pb-2">Welcome Chandra!</h3>
                <Search data={filteredTags} />
            </React.Fragment>
        );
    }
}

export default DashboardHome;