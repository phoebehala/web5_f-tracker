import axios from "axios";

const URL = 'https://alpha-vantage.p.rapidapi.com/query'

// aync function return a promise
export const getDailyBySymbol = async( selectedSymbol )=>{

    try {
        const res = await axios.get( URL,{
          params: {
            function: 'TIME_SERIES_DAILY_ADJUSTED',
            symbol: selectedSymbol || 'MSFT',
            outputsize: 'compact',
            datatype: 'json'
          },
          headers: {
            'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
            'x-rapidapi-key': '36d0287890msh9909e4f0304fb9ap169b23jsne7e772bb61a5'
          }
        });
        console.log(res); 
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const getDailyByCompany = async( selectedSymbol )=>{

    try {
        const res = await axios.get( URL,{
          params: {
            function: 'GLOBAL_QUOTE',
            symbol: selectedSymbol || 'MSFT',
            datatype: 'json'
          },
          headers: {
            'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
            'x-rapidapi-key': '36d0287890msh9909e4f0304fb9ap169b23jsne7e772bb61a5'
          }
        });
        console.log(res); 
        return res.data
    } catch (error) {
        console.log(error);
    }
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
            'x-rapidapi-key': '36d0287890msh9909e4f0304fb9ap169b23jsne7e772bb61a5'
          }
        });
        console.log(res); 
        return res.data
    } catch (error) {
        console.log(error);
    }

}