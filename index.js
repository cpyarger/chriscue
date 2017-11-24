var config = require('config');
var netdevices = config.get('devices.netdevices');
var socks=require('./modules/sockcon.js')
var light=require('./modules/lights.js')
var sleep = require('sleep')
var lights = [];
for (x in netdevices){
  lights.push(new light(netdevices, x));

  //console.log(netdevices[x])
}
var sockss = socks(netdevices);
y=socks.connect(1)
lights[1].connect(y);
/*console.log(lights[1].getchan())
console.log(lights[1].setchan("G", 36000))
console.log(lights[1].setchan("R", 1000))
lights[1].send()
sleep.sleep(1)
lights[1].off()
console.log(lights[1].getchan())
*/


//socks.listall()

y.on('data', function(data){console.log(data.toString('utf-8'))})

lights[1].send(10000,10000,10000)
