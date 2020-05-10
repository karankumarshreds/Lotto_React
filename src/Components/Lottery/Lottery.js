import React, {Component} from 'react';
import Ball from '../Ball/Ball'
import './Lottery.css'

class Lottery extends Component{
    
    static defaultProps = {
        title: 'LOTTO',
        maxBalls: 6,
        maxNum: 40,
    }

    state = {
        // nums: Array.from({length : this.props.maxBalls})
        nums: new Array(this.props.maxBalls).fill(undefined),
        // shake: false
    }

    generate = () => {
        // const randArr = new Array(this.props.maxBalls).fill(1);
        // randArr.forEach((el, i) => {
        //     randArr[i] = Math.floor(Math.random()*this.props.maxNum);
        // });
        // this.setState({
        //     nums: randArr,
        //     shake: true
        // });

        //better way
        this.setState((newState) => ({
            //newState becomes a copy of state
            nums: newState.nums.map(n => {
                return Math.floor( Math.random()*this.props.maxNum + 1 );
            })
        }));
    }

    clickHandler = () => {
        this.generate();
    } 

    render() {
        // 
        return (
            <div className='Lottery'>
                <h1>{this.props.title}</h1>
                {this.state.nums.map((num) => {
                    return <Ball num={num} shake={this.state.shake}/>
                })}
                <br/>
                <button onClick={this.clickHandler.bind(this)}>Try Again!</button>
            </div>
        )
    }

}

export default Lottery;
