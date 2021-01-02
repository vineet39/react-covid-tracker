import React from 'react';
import { MapContainer as LeafletMap, TileLayer, useMap } from 'react-leaflet';
import './Map.css';
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import * as constants from '../../constants';
import { useContext } from 'react';
import { SomeContext } from "../../Provider";

function Map(props) {
    const [context, _] = useContext(SomeContext)
    const { caseType } = context;
    const data = showDataOnMap(props.countries, caseType);
    return (
        <div className="map">
            <LeafletMap center={props.center} zoom={props.zoom} scrollWheelZoom={false}>
                <ChangeView center={props.center} zoom={props.zoom} /> 
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {data}
            </LeafletMap>
        </div>
    )
}

const showDataOnMap = (data, casesType) => {
    const color = constants.casesTypeColors[casesType].name
    console.log(color)
    return(
      data.map((country) => (
        <Circle
          center={[country.countryInfo.lat, country.countryInfo.long]}
          color={constants.casesTypeColors[casesType].name}
          fillColor={constants.casesTypeColors[casesType].name}
          fillOpacity={0.4}
          radius={
            Math.sqrt(country[casesType]) * constants.casesTypeColors[casesType].multiplier
          }
        >
          <Popup>
            <div className="info-container">
              <div
                className="info-flag"
                style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
              ></div>
              <div className="info-name">{country.country}</div>
              <div className="info-confirmed">
                Cases: {numeral(country.cases).format("0,0")}
              </div>
              <div className="info-recovered">
                Recovered: {numeral(country.recovered).format("0,0")}
              </div>
              <div className="info-deaths">
                Deaths: {numeral(country.deaths).format("0,0")}
              </div>
            </div>
          </Popup>
        </Circle>
      ))
    )
  }

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  } 
export default Map;