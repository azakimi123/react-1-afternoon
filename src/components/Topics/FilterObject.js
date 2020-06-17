import React, {Component} from 'react';

class FilterObject extends Component {

    constructor() {
        super();
        this.state = {
            unFilteredArray: [{fruit: 'apple', color: 'red'}, {vegtable: 'carrot', color: 'orange'}],
            userInput: '',
            filteredArray: []
        };
    }

    handleChange(val) {
        this.setState({
            userInput: val
        });
    }


    //Method for filtering objects
    // filterArray(userInput) {

    // }


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Unfilterd: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={ () => {this.filterArray(this.state.userInput)}}>Filter Object</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;