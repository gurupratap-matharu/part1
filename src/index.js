import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Display = ({ text, value }) => (
    <div>{text}: {value}</div>
)

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incrementGood = () => {
        setGood(good + 1)
    }
    const incrementNeutral = () => {
        setNeutral(neutral + 1)
    }
    const incrementBad = () => {
        setBad(bad + 1)
    }
    return (
        <div>
            <h1>Give Feedback</h1>
            <Button onClick={incrementGood} text='Good' />
            <Button onClick={incrementNeutral} text='Neutral' />
            <Button onClick={incrementBad} text='Bad' />
            <h1>Statistics</h1>
            <Display text='Good' value={good} />
            <Display text='Neutral' value={neutral} />
            <Display text='Bad' value={bad} />
            <Display text='All' value={good + neutral + bad} />
            <Display text='Average' value={(good - bad) / (good + neutral + bad)} />
            <Display text='Positive' value={good / (good + neutral + bad)} />

        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'))