import React from 'react'
// plotly.js (ES6 module)
import Plot from 'react-plotly.js';
// utils -custom hook
import useStockInfo from '../../utils/useStockInfo'


const StockGraph = ({stockData, company}) => {

   const { plotlyData } = useStockInfo(stockData);

  return (
    <div style={{display:'flex', justifyContent:'center'}} > 
        <Plot data={plotlyData}
              layout={ {  title: `${company}`} }
              useResizeHandler={true}
              style= {{width: "100%", height: "100%"}}
             />
    </div>
  )
}

export default StockGraph