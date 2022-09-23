import React, { Component } from 'react'

class Classcompo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    pluse() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
                <h1><div>Count -{this.state.count}</div></h1>
                <button onClick={() => this.pluse()}>Increment</button>
            </div>
        )
    }
}

export default Classcompo
