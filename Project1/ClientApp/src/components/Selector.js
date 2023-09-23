import React, { Component } from 'react'

class Selector extends Component {
    render() {
    return(
        <>
            <h2>Начать игру</h2>
            <div className="selector">
                <select
                    value={this.props.field }
                    onChange={e => this.props.setField(e.target.value)}>
                    <option value="4">4*4</option>
                    <option value="6">6*6</option>
                    <option value="8">8*8</option>
                </select>
                <button onClick={() => this.props.setGame(true)}>Start</button>
            </div>
       </>
    )
    }
}
export default Selector