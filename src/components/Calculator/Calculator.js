import React, { Component } from 'react'

import Display from '../Display/Display'
import NumberTile from '../NumberTile/NumberTile'
import OperationTile from '../OperationTile/OperationTile'
import FunctionTile from '../FunctionTile/FunctionTile'

import {MAX_NUMBERS, VIBRATION_MS } from './config'

export default class Calculator extends Component {

    state = {
        oldNum: undefined,
        newNum: "0",
        operator: undefined,
        isThereADot: false,
        isDone: false
    }

    static vibrate = () => {
        window.navigator.vibrate(VIBRATION_MS)
    }

    addNumber = (number) => {
        if(this.state.newNum.length > MAX_NUMBERS) {
            {/* dont do anything if maximum specified is reached */}
          }
          else if (this.state.newNum === "0" && number === ".") {
            this.setState({
                newNum: this.state.newNum + (number),
                isThereADot: true
            })
          }
          else if (this.state.newNum === "0") {
            this.setState({
                newNum: number
            })
          }
          else if (number === ".") {
            this.setState({
                newNum: this.state.newNum + (number),
                isThereADot: true
            })
          }
          else {
            this.setState({
                newNum: this.state.newNum + (number)
            })
          }
        Calculator.vibrate();
    }

    clear = () => {
        this.setState({
            oldNum: undefined,
            newNum: "0",
            operator: undefined,
            isThereADot: false
        })
        Calculator.vibrate();
    }

    convert = () => {
        if(parseFloat(this.state.newNum) !== 0 && !this.state.newNum.startsWith("-")) {
            this.setState({
                newNum: "-" + this.state.newNum
            });
          }
          else if(parseFloat(this.state.newNum) !== 0) {
            this.setState({
                newNum: this.state.newNum.substring(1)
            })
          }
          Calculator.vibrate();
    }

    passNumbers = () => {
        this.setState((prevState) => ({
            oldNum: prevState.newNum,
            newNum: "0",
            isThereADot: false
        }))
    }

    calculate = (explicit = false) => {
        switch(this.state.operator) {
            case "+":
                this.setState({
                    newNum: (parseFloat(this.state.oldNum) + parseFloat(this.state.newNum)).toString()
                })
                break;
            case "-":
                this.setState({
                    newNum: (parseFloat(this.state.oldNum) - parseFloat(this.state.newNum)).toString()
                })
                break;
            case "X":
                this.setState({
                    newNum: (parseFloat(this.state.oldNum) * parseFloat(this.state.newNum)).toString()
                })
                break;
            case "/":
                this.setState({
                    newNum: (parseFloat(this.state.oldNum) / parseFloat(this.state.newNum)).toString()
                })
                break;
            case "%":
                this.setState({
                    newNum: (parseFloat(this.state.oldNum) % parseFloat(this.state.newNum)).toString()
                })
                break;
            default:
        }
        if (!explicit) {
            this.passNumbers();
        }
        else {
            this.setState({
                oldNum: undefined,
                operator: undefined,
                isDone: true
            })
        }
        Calculator.vibrate();
    }

    handleOperation = (operationSign) => {
          if (this.state.oldNum === undefined) {
            this.setState({
                operator: operationSign
            })
            this.passNumbers()
          }
          else {
            this.calculate()
          }
        Calculator.vibrate();
    }

    componentDidMount() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
          })
    }

    render() {
        return (
            <div id="wrapper">
                <Display newNumber={this.state.newNum} oldNumber={this.state.oldNum} operator={this.state.operator} />

                <FunctionTile functionName="AC" functionPassed={this.clear}/>
                <FunctionTile functionName="+/-"functionPassed={this.convert}/>
                <OperationTile operationSign="%" operationPassed={this.handleOperation}/>
                <OperationTile operationSign="/" operationPassed={this.handleOperation}/>

                <NumberTile number="1" add={this.addNumber}/>
                <NumberTile number="2" add={this.addNumber}/>
                <NumberTile number="3" add={this.addNumber}/>
                <OperationTile operationSign="X" operationPassed={this.handleOperation}/>

                <NumberTile number="4" add={this.addNumber}/>
                <NumberTile number="5" add={this.addNumber}/>
                <NumberTile number="6" add={this.addNumber}/>
                <OperationTile operationSign="-" operationPassed={this.handleOperation}/>

                <NumberTile number="7" add={this.addNumber}/>
                <NumberTile number="8" add={this.addNumber}/>
                <NumberTile number="9" add={this.addNumber}/>
                <OperationTile operationSign="+" operationPassed={this.handleOperation}/>

                {/* the zero prop is used by css */}
                <NumberTile number="0" zero={true} add={this.addNumber}/>
                <NumberTile number="." zero={false} add={this.addNumber} dot={this.state.isThereADot}/>
                <OperationTile operationSign="=" operationPassed={this.calculate} explicit={true}/>
            </div>
        )
    }
}
