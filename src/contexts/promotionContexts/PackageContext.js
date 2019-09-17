import React, { createContext, useReducer } from 'react';
import { packageReducer } from '../../reducers/promotionReducers/PackageReducer';
import { packagePromotions } from '../../data/packagePromotions';

export const PackageContext = createContext();

const PackageContextProvider = (props) => {
    const [promotions, dispatch] = useReducer(packageReducer, packagePromotions);

    return (
        <PackageContext.Provider value={{promotions, dispatch}}>
            { props.children }
        </PackageContext.Provider>
    )
}

export default PackageContextProvider;
