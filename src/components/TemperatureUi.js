import React, { useState } from 'react'
import '../components/style.css'


export const TemperatureUi = () => {
    const [temperatureValue, setTemperature] = useState(10)
    const [temColor, setTemColor] = useState('rain')


    const Increment = () => {
        if (temperatureValue === 50) return;
        const newIncTem = temperatureValue + 1;
        if (newIncTem > 30 && newIncTem < 40) {
            setTemColor('hot');
        }
        else if (newIncTem > 15 && newIncTem < 30) {
            setTemColor('neutral');
        }
        else if (newIncTem > 0 && newIncTem < 15) {
            setTemColor('rain')
        }
        else if (newIncTem <= -1) {
            setTemColor('cold');
        }
        setTemperature(newIncTem);
    }

    const decrement = () => {
        if (temperatureValue === -20) return;
        const newDecTem = temperatureValue - 1;
        if (newDecTem > 30 && newDecTem < 40) {
            setTemColor('hot');
        }
        else if (newDecTem > 15 && newDecTem < 30) {
            setTemColor('neutral');

        }
        else if (newDecTem > 0 && newDecTem < 15) {
            setTemColor('rain')
        }
        else if (newDecTem <= -1) {
            setTemColor('cold');
        }
        setTemperature(newDecTem)
    }
    return (
        <>
            <div className='main-container'>
                <h3>
                    Temperature App
                </h3>
                <div className='display'>
                    <div className='temperatureContainer'>
                        <div className={`temperatureStyle ${temColor}`} >{temperatureValue}°C</div>
                    </div>
                    <div className='buttonStyle'>
                        <button onClick={Increment} className='addButton'>+</button>
                        <button onClick={decrement} className='minusButton'>-</button>
                    </div>
                </div>
                <h5>
                    Copyright @ 2022 - All rights reserved - Designed by Maria
                </h5>
            </div>
        </>
    )
}
