import React, {Component} from 'react';
import "./styles/Search.css"

import Yelp from "../util/Yelp"

class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: "",
            businesses: []
        };
    }

    searchYelp = (term, location, sortBy) => {
        Yelp.search(term, location, sortBy).then(businesses => {
            this.setState({
                ...this.state,
                businesses: businesses
            });
        });
    }

    handleTermChange = (event) => {
        const newState =  {...this.state};
        newState.term = event.target.value;
        this.setState(newState);
    }



    render() {
        return (
            <div className="search">
                <input type="search" onChange={this.handleTermChange}/>
                <button type="button" onClick={() => this.searchYelp(this.state.term, this.props.location , 'best_match')} className="btn btn-outline-success my-2 my-sm-0">Search</button>
                <ul className="searchResult">
                    {this.state.businesses.map((business) =>
                        <li className="jumbotron" key={business.id} onClick={() => this.props.handleRestaurantClick(business)}>
                            <span>
                                <img src={business.imageSrc} alt={business.address} className="resultImg"/>
                                <p>{business.name}</p>
                                <p>{business.address}</p>
                                 <p>{business.phone}</p>
                                <p>Stars: {business.rating} </p>
                            </span>
                        </li>)}
                </ul>

            </div>
        );
    }
}

export default SearchComponent;