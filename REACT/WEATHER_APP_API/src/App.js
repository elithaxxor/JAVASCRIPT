import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { render } from "react-dom";
import { Map, GoogleApiWrapper, Marker  } from 'google-map-react';
import React, { Component } from "react";
import { GoogleMaps } from './components/GoogleMaps';
import GoogleMapReact from "google-map-react";


function App() {

    // api obj
  const api = {
    key: "507913d473ed7baab53e2a9a4155cc5d",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [getWeather, setWeather] = useState('');
  const [getWeather2, setWeather2] = useState({});
  const [getQuery, setQuery] = useState({});   // for api query, resp is .json
  const [getQueryCount, setQueryCount] = useState(0);
  const [getCurrentPosition, setCurrentLocation] = useState('');
  const [getCurrentLat, setCurrentLat] = useState('');
  const [getCurrentLong, setCurrentLong] = useState('');

  // to query data. api returns json. 1. set url params 2.request(async) 3. reset query obj back to null for reuse.

  // func to fetch date-data in format for API
  const dateBuilder = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()]; // responds corropsonding day
    let date = d.getDate();
    let month = months[d.getMonth()]; // returns numerical value 0-11 (month)
    let year = d.getFullYear(); // returns full value of year (2021 etc)
    console.log(`${day} ${date} ${month} ${year}`)
    return `${day} ${date} ${month} ${year}`
    }

// useEffect(() => {
//    let onChange = (e) => {
//     setQuery(e.target.value);
//     setQueryCount(queryCount+1);
//     console.log('Search Count: ', query);
//    }});


    // watches for location change
useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setCurrentLocation( `${position.coords.latitude} ${position.coords.longitude}`)
            setCurrentLat(`${position.coords.latitude}`)
            setCurrentLong(`${position.coords.longitude}`)
        });
    }else{   // !getCurrentPosition || getCurrentPosition === 'undefined' ? getLocation(): console.log('search fulfilment completed')

    console.log('User Activity');
  console.log('weather', getWeather);
  console.log('query count', getQueryCount);
  console.log('query', getQuery);
 // !getWeather || getWeather === 'undefined' ? getLocation(): console.log('search fulfilment completed')
    }
},[]);


  const search_api = async event => {

    if (event.key === "Enter") {
        try {
            await fetch(`${api.base}weather?q=${getQuery}&units=metric&APPID=${api.key}`)
                 .then(resp => resp.json()).then(result => {
                    setWeather2(result);
                    setQuery('');
                    setQueryCount(getQueryCount + 1);

                    console.log('query count: ', result);
                    console.log('res');
                    console.log('result', result, '\n weather \n ', getWeather2);
                   // CREATE TIMEOUT FOR ALERTS
                   // alert(result.text);
                 //alert(getWeather2.text)

             }).catch(e =>{
                    console.log('error in api fetch', e)
                    alert('error in fetch\n', e)
                });
        }catch(err){
            console.log(err);
            console.log('res');
            throw new Error();
        }
    }
  }
 // let onChange = (e) => {
 //        setQuery(e.target.value);
 //        setQueryCount(getQueryCount+1);
 //        console.log('search initiated.. \n', 'query', getQuery);
 //        console.log('Search Count: ', getQueryCount);
 //        getLocation(e)
 //    }

    function getLocation(){
        if ("geolocation" in navigator) {
            console.log("get functoin called, checking if geo locatoin allowed");
          navigator.geolocation.getCurrentPosition(function(position) {
          console.log(`Latitude: ${position.coords.latitude} \n
               Longitude: ${position.coords.longitude}`)
              setCurrentLocation( `${position.coords.latitude} ${position.coords.longitude}`)
          return `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`
      })
    }else{
            console.log("GeoLocation not available");
            return 'geo location not available'
        }}


    return (
      <div //updates the homepage on runtime if there is no current posisiton defined, if not current position, then fetch current possion.
          className={(typeof getCurrentPosition == "undefined") ? ((setWeather.main.temp > 16 && setCurrentLocation(getLocation())) ? 'app warm' : 'app') : 'app'}>
    <main>
      <div className='search-box'>
        <input
            placeholder='search..'
            type="text"
            className='search-bar'
            // onChange={event => setQuery(event.target.value)}
            onChange={(event => (setQuery(event.target.value)))}
            value = {getQuery}
            onKeyPress={search_api}
        />
      </div>

      <section className='location-box'>
        <div className='location'>  {getLocation()} {getCurrentPosition}</div>
        <div className='date'> {dateBuilder(new Date())}</div>
      </section>
      <div className='weather-box'>
        <div className='temp'>  {/*if the user has not searched for the weather, then use weather1 (their location) */}
          {getWeather2.temperature ? getWeather : getWeather2.temperature}
        </div>
          <div className='weather'> {getWeather} </div>
          {/*{typeof getWeather2.weather[0].main == 'undefined' ? getWeather : getWeather2.weather[0].main }*/}
          <GoogleMaps
              getCurrentPosition = {getCurrentPosition}
              getCurrentLat = {getCurrentLat}
              getCurrentLong = {getCurrentLong}
          />
      </div>

    </main>
    </div>
  );
}

export default App;
