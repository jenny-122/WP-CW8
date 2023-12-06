import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        /* TODO (Counter): Use setState() to modify the count. Here’s an example:
            this.setState({
        count: this.state.count + 1
        */
        this.setState({
            count: this.state.count + 1
        });
    }
  
    render() {
        return (
            <div className="counter">
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment Count</button><br />
            </div>
        );
    }
}

export default Counter;
