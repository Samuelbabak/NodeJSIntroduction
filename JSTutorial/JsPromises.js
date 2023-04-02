const axiosRequest = require('axios')

// axiosRequest 
//     .get('https://httpstat.us/200')
//     .then(response => {
//         console.log(`you could ${response.data.activity}`);
//     })
//     .catch(error => {
//         console.error(`ERROR! ${error}`)
//     })

// console.log("Complete!");

async function axiosRequestBetter() {
    try{
        let response = await axiosRequest.get('https://httpstat.us/404');
        console.log(`you could ${response.data.activity}`);
    } catch(error) {
        console.error(`ERROR! ${error}`)
    }
    
}

axiosRequestBetter()