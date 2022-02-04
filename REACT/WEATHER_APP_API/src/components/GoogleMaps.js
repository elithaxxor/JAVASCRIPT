import React from 'react'
import { Component, useState } from "react";
//import { Map, GoogleApiWrapper, Marker  } from 'google-map-react';
import "./styles.css";
import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";

// import MyMarker from "./MyMarker";
// npm i web-vitals --save-dev
// npm install --save google-maps
export const GoogleMaps = ( {getCurrentLat, getCurrentLong, getCurrentPosition}) =>{
    const apiKey = 'AIzaSyCYNb8G-TQEqXIuj_mr7Hz-umnpUaBnGoI'

    const [state, setState] = useState({name: "React"})
    const mapStyles = {
        width: '100%',
        height: '100%'
    };

    const points = [
        { id: 1, title: "San Diego", lat: getCurrentLat, lng: getCurrentLong },
      //  { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
       // { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 }
    ];

        return (
            <div className="gMap">
                <GoogleMapReact
                    bootstrapURLKeys={{
                        // remove the key if you want to fork
                       // key: 'AIzaSyCYNb8G-TQEqXIuj_mr7Hz-umnpUaBnGoI',
                        language: "en",
                        region: "US"
                    }}
                    defaultCenter={{ lat: 51.506, lng: -0.169 }} // CHANGE THIS ONCE THE KEY IS RESOLVED
                    defaultZoom={15}

                >
                    {points.map(({ lat, lng, id, title }) => {
                        return (
                            <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={getCurrentPosition} />
                        );
                    })}
                </GoogleMapReact>
            </div>
        );
    }
