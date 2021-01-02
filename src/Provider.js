import React, { useState, createContext } from "react";
import * as constants from './constants';

export const SomeContext = createContext(null);

const {Provider} = SomeContext;

const SomeProvider = ({ children }) => {
    const [state, setState] = useState({
        caseType: constants.NEW_CASES,
        coordinates: { lat: 34.80, lng: -40.47 }
    });
    return <Provider value={
        [state, setState]}> {children} </Provider>;
};

SomeProvider.context = SomeContext;

export default SomeProvider;