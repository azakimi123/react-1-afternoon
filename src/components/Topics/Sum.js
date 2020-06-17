import React, {Component} from 'react';

class Sum extends Component {


    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        };
    }


    changeNumber1(val) {
        this.setState ({
            number1: parseInt(val, 10)
        });
    }

    changeNumber2(val) {
        this.setState ({
            number2: parseInt(val, 10)
        });
    }

    addNum(num1, num2) {
        let answer = num1 + num2;

        this.setState({sum: answer})
    }



    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={ (event) => this.changeNumber1(event.target.value)}/>
                <input className="inputLine" onChange={ (event) => this.changeNumber2(event.target.value)}/>
                <button className="confirmationButton" onClick={ () => {this.addNum(this.state.number1, this.state.number2)}}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;