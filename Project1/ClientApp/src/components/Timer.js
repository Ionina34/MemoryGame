import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        hour: 0,
        minutes: 0,
        seconds: 0
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes, hour } = this.state
            

            if (seconds < 59) {
                this.setState(({ seconds }) => ({
                    seconds: seconds + 1
                }))
                this.props.setSecond(seconds)
            }
            if (seconds === 59) {
                if (minutes === 59) {
                    this.setState(({ minutes, hour }) => ({
                        hour: hour + 1,
                        minutes:0,
                        seconds: 0
                    }))
                }
                else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes + 1,
                        seconds: 0
                    }))
                }
                this.props.setMinute(minutes+1)
                this.props.setHour(hour+1)
            }
            if (this.props.win === true)
                clearInterval(this.myInterval)
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const {hour, minutes, seconds } = this.state
        return (
            <div>
                {minutes === 0 && seconds === 0 && hour == 0
                    ? <h3 className="starting">Игра началась</h3>
                    : <p>{hour < 10 ? `0${hour}` : hour}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
                }
            </div>
        )
    }
}