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

        case 'Saudi Aramco':
            return '2222.SR'
    
        case 'Berkshire Hathaway':
            return 'BRK-A'

        case 'NVIDIA':
            return 'NVDA'  
            
        case 'Meta (Facebook)':
            return 'FB'

        case 'TSMC':
            return 'TSM'  

        default:
            return symbol;    
    }

 
 };
   