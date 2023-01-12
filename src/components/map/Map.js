import './map.scss';
import { useEffect, useState, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, useMapEvents, useMap } from 'react-leaflet'
import { useSelector } from 'react-redux';

const Map = () => {
    const {pathCoordinates} = useSelector(state => state);
    
    function markers() {
        if (pathCoordinates[0]) {
            return (
                <>
                    <Marker position={pathCoordinates[0]}/>
                    <Marker position={pathCoordinates[pathCoordinates.length - 1]}/>
                </>
                
            )
        }
    }

    const markersView = markers()

    

    return (
        <>
            <MapContainer center={[59.83934196, 30.36423701]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Path pathCoordinates={pathCoordinates}/>
                {markersView}
            </MapContainer>
            
        </>
        
    )
}

const Path = ({pathCoordinates}) => {
    const map = useMap();
    const innerBounds = [pathCoordinates[0], pathCoordinates[pathCoordinates.length - 1]];
    const innerHandlers = useMemo(
        () => ({
            click() {
                map.fitBounds(innerBounds)
            }
        }), [innerBounds],
    )

    return <Polyline  eventHandlers={innerHandlers} pathOptions={{color: "red"}} positions={pathCoordinates}/>
}

export default Map