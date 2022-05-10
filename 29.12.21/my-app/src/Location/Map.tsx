import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import React from 'react'
import { FiMap } from "react-icons/fi";
import './map.css';




export function Map() {

    // <div className='maping' >
    //     <h3>Loading <FiMap />.. </h3>
    //     <img src="https://thumbs.gfycat.com/GranularSleepyGardensnake-size_restricted.gif" />
    // </div>
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBqk9olkNWIaHCYxlLSflh77D1x20YFDz4"
    })

    if (!isLoaded) return <div> Loading...</div>
    return (
        <div className='map'><Mapping /></div>
    )
}

function Mapping() {
    return <GoogleMap
        // zoom={12} center={{ lat: 32.710664387057356, lng: 35.077130300861164 }}
        zoom={8} center={{ lat: 32.02661870803412, lng: 34.82585335877905 }}
        mapContainerClassName="map-container">
        <Marker title='זוחלוק ,עספיא' position={{ lat: 32.710664387057356, lng: 35.077130300861164 }} />
        <Marker title='Hiriya Recycling Park' position={{ lat: 32.02661870803412, lng: 34.82585335877905 }} />
    </GoogleMap>
}
//32.02661870803412, 34.82585335877905
// 32.710664387057356, 35.077130300861164