import React, { useCallback, useMemo, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Map = ({ lattitude, longitude }) => {


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY
    })

    const center = {
        lat: lattitude,
        lng: longitude
    }

    const [map, setMap] = useState(null)

    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback((map) => {
        setMap(null);
    }, [])

    return (
        <>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '300px', height: '300px' }}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                </GoogleMap>
            ) : null
            }
        </>
    );
}

export default Map;