/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import WeatherDisplay from '../components/WeatherDisplay'
import LocationContainer from '../components/LocationContainer'

function index() {
  return (
    <>
      <Header />
      <div className="bodyContainer">
        <LocationContainer/>
        <WeatherDisplay />
      </div>
    </>
  )
}

export default index