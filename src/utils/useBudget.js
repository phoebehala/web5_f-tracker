// contextAPI
import { useContext } from 'react';
import {FinanceTrackerContext} from '../context/context' 

const useBudget = (max) => {
    const {totalExpence} = useContext(FinanceTrackerContext)
    
    const ratio = (totalExpence / max )
    // if the totalExpence exceed or equal to the max (budget), the ratio is 1
    const displayedRatio = ratio>=1 ? 1 :ratio

    let shownColor
    if (ratio < 0.5) shownColor= "green"
    else if (ratio < 0.75) shownColor= "orange"
    else shownColor="red"

    return {displayedRatio, shownColor };

};
  
export default useBudget;