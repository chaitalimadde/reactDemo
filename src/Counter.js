import {Increment} from './actions/index';
import {Decrement} from './actions/index';
import {Reset} from './actions/index';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component{

    render(){
        const {Increment, Decrement, Reset, counter} = this.props;
        return<div>
<Button variant="primary" onClick={Increment}>Increment by 1</Button>{' '}
<Button variant="primary" onClick={Decrement}>Decrement by 1</Button>{' '}
<Button variant="primary" onClick={Reset}>Reset</Button>{' '}
<p>{counter}</p>
        </div>
    }
}

function mapStateToProps(state){
    return {counter: state.saveData.counter}
}

function mapDispatchToProps(dispatch){
    return {
        Increment:data=>dispatch(Increment()),
        Decrement:data=>dispatch(Decrement()),
        Reset:data=>dispatch(Reset())
    }
}


export default connect(
    mapStateToProps,mapDispatchToProps)(Counter)