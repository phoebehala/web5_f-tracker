// export const companies = [ 
//     {'Microsoft':'MSFT'},
//     {'Tesla':'TSLA'},
// ]
let names = ['Microsoft','Tesla','Apple','Alphabet (Google)','Amazon','Walmart','Berkshire Hathaway','NVIDIA','Meta (Facebook)','TSMC','Alibaba','Walt Disney','Intel','McDonald', 'Cloudflare','Airbnb', 'Visa','Boeing','Snowflake',"Domino's Pizza"]
   // ascending order
export const companies = names.sort(function (a, b) {
    if (a < b) {
        return -1;
    }
    if (b < a) {
        return 1;
    }
    return 0;
});




