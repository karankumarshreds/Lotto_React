import React, {Component} from 'react';
import './Ball.css'

class Ball extends Component{

    render() {
        // let shake = 'Ball'
        // if (this.props.shake == true) {
        //     shake = 'Shake Ball'
        // }
        return (
            <div className='Ball'>
                <h5>{this.props.num}</h5>
            </div>
        )
    }

}

export default Ball;
