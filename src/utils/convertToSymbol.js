export const convertToSymbol = (companyName) => {
    let symbol = 'MSFT'
    switch(companyName){
        case 'Microsoft':
            return 'MSFT'

        case 'Tesla':
            return 'TSLA'
            
        case 'Apple':
            return 'AAPL'

        case 'Alphabet (Google)':
            return 'GOOG'
                
        case 'Amazon':
            return 'AMZN'

        case 'Walmart':
            return 'WMT'
    
        case 'Berkshire Hathaway':
            return 'BRK-A'

        case 'NVIDIA':
            return 'NVDA'  
            
        case 'Meta (Facebook)':
            return 'FB'

        case 'TSMC':
            return 'TSM'

        case 'Alibaba':
            return 'BABA'

        case 'Walt Disney':
            return 'DIS'
        
        case 'Intel':
            return 'INTC'

        case 'McDonald':
            return 'MCD'
        
        case 'Cloudflare':
            return 'NET'

        case 'Airbnb':
            return 'ABNB'

        case 'Visa':
            return 'v'

        case 'Boeing':
            return 'BA'

        case 'Snowflake':
            return 'SNOW'
        
        case "Domino's Pizza":
            return 'DPZ'

        default:
            return symbol;    
    }

 
 };
   