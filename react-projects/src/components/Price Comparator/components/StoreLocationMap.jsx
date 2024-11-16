import React, { useState, useCallback } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'

const GOOGLE_MAPS_API_KEY = 'GOOGLE_MAPS_API_KEY'

const defaultCenter = { lat: 37.7749, lng: -122.4194 }

const StoreLocationMap = ({ stores }) => {
    const [selectedStore, setSelectedStore] = useState(null)

    const onSelectStore = useCallback((store) => {
        setSelectedStore(store);
    }, [])

    const mapContainerStyle = {
        width: '100%',
        height: '400px',
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={defaultCenter}
                zoom={12}
            >
                {stores.map((store) => (
                    <Marker
                        key={store.id}
                        position={{ lat: store.location.lat, lng: store.location.lng }}
                        onClick={() => onSelectStore(store)}
                    />
                ))}

                {selectedStore && (
                    <InfoWindow
                        position={{
                            lat: selectedStore.location.lat,
                            lng: selectedStore.location.lng,
                        }}
                        onCloseClick={() => setSelectedStore(null)}
                    >
                        <div>
                            <h3 className="font-semibold">{selectedStore.name}</h3>
                            <p>{selectedStore.address}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    )
}

export default StoreLocationMap