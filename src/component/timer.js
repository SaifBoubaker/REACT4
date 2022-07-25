import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(){
        super();
        this.state={
            timer : 0,
            intervall : null
        }
    }

    componentDidMount(){
        this.setState({
        intervall : setInterval(()=> this.setState({
            timer: this.state.timer +1
        }),1000)
        })
    }

    componentWillUnmount(){
        clearInterval(this.state.intervall)
    }
    render() {
    return (
    <div>
        <h3>The Timer has mounted since {this.state.timer}</h3>
    </div>
    )
}
}