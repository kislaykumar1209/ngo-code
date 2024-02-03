import React from 'react'
import Spinnr from '../../assets/spinner.gif'
import './spinner.css'

const Spinner = () => {
    return (
        <button class="buttonload">
            <img src={Spinnr} alt='spinner' />Loading
        </button>
    )
}

export default Spinner