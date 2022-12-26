const request=require('request')

const forecast=(longitude,latitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=474a88c69233e43b28dbde45a5127801&query='+latitude+','+longitude

    request({url, json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather services!',undefined)
        }
        else if(body.error){
            callback('Unable to find location.',undefined)
        }
        else{
            callback(undefined,'It is '+ body.current.weather_descriptions[0]+' today. The current temperature is '+body.current.temperature+' degrees but it feels like '+body.current.feelslike+' degrees outside.Is it day? : '+body.current.is_day )
        }
    })

}
module.exports=forecast
