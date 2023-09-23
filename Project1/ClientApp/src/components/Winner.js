import React, { Component } from 'react'

export default class Winner extends Component {
    render() {
        const hour = this.props.hour
        const minutes = this.props.minutes
        const seconds = this.props.seconds
        return (
            <div className="center">
                <h1>Победа</h1>
                <p>Вы справились за {hour < 10 ? `0${hour}` : hour}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
                <p>И сделали {this.props.num} ходов</p>
                <button className="restart" onClick={()=>this.props.setGame(false) }>Начать сначала?</button>
            </div>
            )
    }
}