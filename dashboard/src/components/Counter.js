import React from 'react';

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 2,
            name: 'Thamme Gowdru'
        }

        this.handleAddition = this.handleAddition.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
    }

    handleSubtract () {
        console.log('subtracted')
        this.setState({
            count: this.state.count - 1,
            name: "Bimbitha"
        })
    }

    handleAddition () {
        console.log('Added')
        this.setState({
            count: this.state.count + 1,
            name: "Chaitra"
        })
    }

   
    render() {
        console.log("I was rendered")

        let type = ''
        if (this.state.count % 2 === 0) {
            type = 'even';
        } else {
            type = 'odd';
        }

        return (
          <div>  
              <h3> {this.state.count % 2 === 0 ? 'Even': 'Odd'}</h3>
              <h3>{type}</h3>
              <h2> The current count is even </h2>
              <button onClick={this.handleSubtract }> - </button>              
                {this.state.count} - {this.state.name}
              <button onClick = {this.handleAddition}> + </button>
          </div>
        );
    }

}

export default Counter;