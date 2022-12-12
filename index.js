const express = require("express");
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();

app.set('view engine', 'pug')
const RADIO_DATA_URL = "https://raw.githubusercontent.com/erral/eitbapi/master/radio-cache.json"
const TV_DATA_URL = ""
const RADIO_DATA = fetch(RADIO_DATA_URL, {method: 'GET'})
.then(res => res.json())

app.get('/', function (req, res) {
    res.render('templates/index')
  });
app.get('/playlist', (req, res) => {
    let data = fetch("https://api.eitb.eus/api/getPrograms/euskadi_irratia", {
              method: "GET",
              headers: {
                'Content-Type': 'application/json'
              }
              }).then(data => data.json()).then(datuak => res.json(datuak))
} )
app.get('/program-type-list', (req,res) => {

    res.json({
        "@context": "http://www.w3.org/ns/hydra/context.jsonld",
        "@id": '/program-type-list',
        "@type": "TypeList",
        "parent": '/',
        "member": [],
    })
}

)

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});