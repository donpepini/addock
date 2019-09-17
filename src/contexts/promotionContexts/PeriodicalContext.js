import React, { createContext, useReducer } from 'react';
import { periodicalReducer } from '../../reducers/promotionReducers/PeriodicalReducer';
import { periodicalPromotions } from '../../data/periodicalPromotions';

export const PeriodicalContext = createContext();

const PeriodicalContextProvider = (props) => {
    const [promotions, dispatch] = useReducer(periodicalReducer, periodicalPromotions);

    return (
        <PeriodicalContext.Provider value={{promotions, dispatch}}>
            { props.children }
        </PeriodicalContext.Provider>
    )
}

export default PeriodicalContextProvider;



