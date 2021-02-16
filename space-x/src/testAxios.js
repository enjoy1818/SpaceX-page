const axios = require('axios');

axios({
  method: 'get',
  url: 'https://api.spacexdata.com/v3/rockets'
})
  .then(response => {
    console.log(response.data[0].id)
    // do something about response
  })
  .catch(err => {
    console.error(err)
  })