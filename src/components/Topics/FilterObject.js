import React, {Component} from 'react';

class FilterObject extends Component {

    constructor() {
        super();
        this.state = {
            unArr: [{fruit: 'apple', color: 'red'}, 
            {vegtable: 'carrot', color: 'orange'}, 
            {fruit: 'strawberry', size: 'small'}, 
            {vegtable: 'pea', size: 'small'}],
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
    filterArray(userInput) {
        let newArr = [];
        for (let i = 0; i < this.state.unArr.length; i++) {
            for (let key in this.state.unArr[i]) {
                if (key === userInput) {
                    newArr.push(this.state.unArr[i]);
                    this.setState({filteredArray: newArr})
                }
            }
        }
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Unfilterd: {JSON.stringify(this.state.unArr, null, 10)}</span>
                <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={ () => {this.filterArray(this.state.userInput)}}>Filter Object</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;