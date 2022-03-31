import axios from "axios";

const URL = 'https://alpha-vantage.p.rapidapi.com/query'

// aync function return a promise
export const getDailyBySymbol = async( selectedSymbol )=>{


        const res = await axios.get( URL,{
          params: {
            function: 'TIME_SERIES_DAILY_ADJUSTED',
            symbol: selectedSymbol || 'MSFT',
            outputsize: 'compact',
            datatype: 'json'
          },
          headers: {
            'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY
          }
        });
        console.log(res); 
        return res.data
   
}

export const getDailyByCompany = async( selectedSymbol )=>{


        const res = await axios.get( URL,{
          params: {
            function: 'GLOBAL_QUOTE',
            symbol: selectedSymbol || 'MSFT',
            datatype: 'json'
          },
          headers: {
            'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY
          }
        });
        console.log(res); 
        return res.data

}

export const getSymbolByName = async( name )=>{
    try {
        const res = await axios.get( URL,{
          params: {
            keywords: name,
            function: 'SYMBOL_SEARCH',
            datatype: 'json'
          },
          headers: {
            'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY
          }
        });
        console.log(res); 
        return res.data
    } catch (error) {
        console.log(error);
    }

}