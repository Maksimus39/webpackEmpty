import {FC, useState} from "react";
import './counter.scss'

export const Counter: FC = () => {
    const [counterValue, setCounterValue] = useState<number>(0)


    const incrementCounter = () => {
        setCounterValue(prev => prev + 1)
    }

    const decrementCounterValue = () => {
        setCounterValue(prev => prev - 1)
    }

    return (
        <div className={'counter-container'}>
            <div className={'counter-value'}>
                {counterValue}
            </div>
            <div className={'counter-btn-block'}>
                <button onClick={incrementCounter} className={'counter-btn-item'}>Increment counter</button>
                <button onClick={decrementCounterValue} className={'counter-btn-item'}>Decrement counter</button>
            </div>
        </div>
    )
}