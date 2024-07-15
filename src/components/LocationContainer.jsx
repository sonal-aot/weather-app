/* eslint-disable no-unused-vars */
import React from 'react'
import "../styles/locationContainer.css"

function LocationContainer() {
    return (
        <div className='locationContainer'>
            <label htmlFor="locationInput">Enter The Location </label>
            <input type="text" name="locationInput" id="locationInput" />
        </div>
    )
}

export default LocationContainer