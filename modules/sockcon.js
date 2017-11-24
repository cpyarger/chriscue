var net = require('net');
var client = new net.Socket();

//Object.keys(netdevices).length //Get number of netdevices
module.exports=sockcon;
var netdevices;
function sockcon(nd){
  netdevices=nd;
  for (light in nd) {
    //console.log(light)
  }
  //console.log('jello')
};

sockcon.listall = function(){
  console.log(netdevices)
  return netdevices
};
sockcon.connect = function(id){
  var client = new net.Socket();
  _port = netdevices[id]['port']
  _host = netdevices[id]['host']
  _name = netdevices[id]['name']
  return client.connect(_port, _host)

};
