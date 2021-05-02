const axios = require('axios').default;
const express = require("express");
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 8000;
//require ("dontenv").config();

var subscriptionKey =  "d92715148ebc4933b75f618c61136aba";
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
var location = "global";

app.post("/translateText", (req, res) => {
  console.log("kevin")
    axios({
      baseURL: endpoint,
      url: '/translate',
      method: 'post',
      headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey,
          'Ocp-Apim-Subscription-Region': location,
          'Content-type': 'application/json',
          'X-ClientTraceId': uuidv4().toString()
      },
      params: {
          'api-version': '3.0',
          'from': 'en',
          'to': ['de', 'it']
      },
      data: [{
          'text': 'Hello World!'
      }],
      responseType: 'json'
  }).then(function(response){
      console.log(JSON.stringify(response.data, null, 4));
  })
         

  });
  app.listen(port, () => {
    console.log(`Listening at http://192.168.0.7:${port}`);
    
  });
  