import React from 'react';
import './SearchBar.css';


const sortByOptions={
    'Best Match':'best_match',
    'Highest Rated':'rating',
    'Most Reviewed':'review_count'
}


class SearchBar extends React.Component{
    renderSortByOptions(){

        let sortByOptionValue=Object.keys(sortByOptions).map((sortByOption,i)=>{
            return <li key={'sortByOption_' +i}>{sortByOption}</li>
        })

        return sortByOptionValue;

        
    }

    render(){

        return(
            <div class="SearchBar">
            <div class="SearchBar-sort-options">
                <ul>{this.renderSortByOptions()}</ul>
            </div>
            <div class="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div class="SearchBar-submit">
            <a>Let's Go</a>
            </div>
            </div>
        )

    }

}

export default SearchBar;