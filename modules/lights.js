module.exports=light;
light.lightdat;
light.name;
light.id;
light.channels;
light.host;
light.port;
light.connection;

var fs    = require('fs'),
 nconf= require('nconf')


function light(ld, id){
  light.lightdat=ld[id];
  light.id=id;
  light.channels=ld[id]['channels'];
  light.host=ld[id]['host'];
  light.port=ld[id]['port'];
  light.name=ld[id]['name'];
  //console.log('a new light '+ ld[id]['name'])

  return light
}


light.connect= function(conn){
connection=conn;
return connection;
}
light.getchan = function(){
  return(nconf.get("devices:netdevices:1:channels"))
}

light.setchan = function(channel, ammount){
  nconf.file('config/default.json')
  nconf.set("devices:netdevices:1:channels:"+channel, ammount)
  nconf.save()
  nconf.file('config/default.json')
}


light.fadeOff = function(time){
connection.write("fadeOff "+time)
}
light.fadeTo= function(color, time){
  connection.write("fadeOn "+color+" "+ time)
}
light.off=function(){
  connection.write("pwm 0 0 0 0 \n")
}

light.send= function(R, G, B){
  var data="pwm "+R+" "+G+" "+B+" \n"
  connection.write(data)
}
