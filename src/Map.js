import React from 'react';
import { MapContainer as LeafletMap, TileLayer, useMap } from 'react-leaflet';
import './Map.css';
import { showDataOnMap } from "./util";

function Map(props) {
    return (
        <div className="map">
            <LeafletMap center={props.center} zoom={props.zoom} scrollWheelZoom={false}>
                <ChangeView center={props.center} zoom={props.zoom} /> 
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(props.countries, props.casesType)}
            </LeafletMap>
        </div>
    )
}

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  } 
export default Map;