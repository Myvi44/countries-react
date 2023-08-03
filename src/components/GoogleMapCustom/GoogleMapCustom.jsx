import React from 'react';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const API_KEY = "AIzaSyBRXA930N4nsRVNbcY7ybpfaUik5hJJwzo";

export const GoogleMapCustom = ({ currentZoom, currentCenter }) => {

    const containerStyle = {
        width: '100%',
        height: '100%',
    };

    const center = { lat: currentCenter?.[0], lng: currentCenter?.[1] };

    return (
            <LoadScript googleMapsApiKey={API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={currentZoom}
                />
            </LoadScript>
    );

}