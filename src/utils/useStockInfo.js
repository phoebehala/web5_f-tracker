

const useStockInfo = (stockData) => {
  
   let stockChartXValues = [] // date
   let stockChartYValues = [] // price per date

   for(let key in stockData['Time Series (Daily)']){
    stockChartXValues.push(key)
    stockChartYValues.push(stockData['Time Series (Daily)'][key]['5. adjusted close'])

   }
   console.log({stockChartXValues});
   console.log({stockChartYValues});

    // data for plotly.js
    const plotlyData = [
      {
          x: stockChartXValues,
          y: stockChartYValues,
          type: 'scatter'
      }
    ]


    return { plotlyData };

};
  
export default useStockInfo;