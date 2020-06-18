import React, {Component} from 'react';

class FilterString extends Component {


    constructor() {
        super();
        this.state = {
            unFilteredArray: ['red', 'blue', 'purple', 'green', 'rose', 'orange', 'pink'],
            userInput: '',
            filteredArray: []
        };
    }

    handleChange(val) {
        this.setState({
            userInput:val
        });
    }

    //Method to filter array
    filterArray(input) {
        let arr = [];
        for (let i = 0; i < this.state.unFilteredArray.length; i++) {
            if (this.state.unFilteredArray[i].includes(input)) {
                arr.push(this.state.unFilteredArray[i]);

                this.setState({ filteredArray: arr })
            }
        }

    }



    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfilterd Array: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={ () => {this.filterArray(this.state.userInput)}}>Filter Array</button>
                <span className="resultsBox filterStringRB">Filtered Array: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;