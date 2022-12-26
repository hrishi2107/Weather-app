const path=require('path')
const express = require('express')
const hbs=require('hbs')
const app=express()


const forecast=require('./utils/forecast')
const geocode=require('./utils/geocode')

const port= process.env.PORT || 3000
const publicDirectoryPath= path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Hrishi Kant Pandey'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Hrishi Kant Pandey'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        message:'I am here to help you!',
        name:'Hrishi Kant Pandey'
    })
})
app.get('/weather',(req,res)=>{

    if(!req.query.address)
    {
        return res.send({
            error: 'You must provide an address!'
        })
    }

        geocode(req.query.address,(error,{longitude,latitude,location}={})=>{
            if(error)
            {
                return res.send({error})
            }
            forecast(longitude,latitude,(error,forecastdata)=>{
                if(error)
                {
                    return res.send({error})
                }
                res.send({
                    address: req.query.address,
                    location,
                    forecast: forecastdata
                })
            })
        })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Hrishi Kant Pandey',
        message:'Help article not found.'
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Hrishi Kant Pandey',
        message:'Page not found.'
    })
})


app.listen(port,()=>{
    console.log('Server is up on port '+port)
})


