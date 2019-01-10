var Influx = require('influx');
var express = require("express");

var app = express();
var url ="http://localhost:8086/mydb";
var influx = new Influx.InfluxDB(url);

schema: [
  {
    measurement: 'response_times',
    fields: {
      path: Influx.FieldType.STRING,
      duration: Influx.FieldType.INTEGER
    },
    tags: [
      'host'
    ]
  }
]
//create
influx.writePoints([
 {
   measurement: 'student_details',
   tags: { name: "raju"},
   fields: {marks: 5 },
 }

]).catch(err => {
  console.error(`Error saving data to InfluxDB! ${err.stack}`)


return next()
})

//read
app.get('/times', function (req, res) {
  influx.query(`
    select * from student_details
    where host = ${Influx.escape.stringLit(raju())}
    order by time desc
    limit 10
  `).then(result => {
    res.json(result)
  }).catch(err => {
    res.status(500).send(err.stack)
  })
})


//delete
influx.dropDatabase("ocean_tides");




var port = process.env.PORT || 4000;

      var server = app.listen(port, function(){
      console.log('Listening on port ' + port);
      });