var express = require('express')
const bodyParser = require('body-parser')

var app = express()
const cors = require('cors')
const port = 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.listen(port,function(){
    console.log("Corriendo en el puerto "+port)
})

app.get('/',function(req,res){
    res.send("Hola Mundo!")
})

app.get('/Nombre',function(req,res){
    res.send("Juan Pablo")
})

app.post('/Prueba',function(req,res){
    const nombre = req.body.nombre
    const carnet = req.body.carnet
    
    console.log(req.body)
    console.log('carnet: '+carnet)
    console.log('nombre: '+nombre)


    res.send('Prueba Realizada Correctamente!')
})