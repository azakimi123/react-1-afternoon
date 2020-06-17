import React, {Component} from 'react';

class Palindrome extends Component {


    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        };
    }

    handleChange(val) {
        this.setState ({
            userInput: val
        });
    }


    //Method to solve problem
    // result(input) {
    //This method should update the value of palindrome.
    // }




    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={ () => {this.result(this.state.userInput)}}>Result</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;