
var Rval=0;
var Gval=0;
var Bval=0;
var mult=100
var net = require('net');
var client = new net.Socket();
x=client.connect(23, '192.168.42.152')
// Create a screen object.
var blessed = require('blessed')
  , contrib = require('blessed-contrib')
  , screen = blessed.screen()
  , line = contrib.line(
      { style:
        { line: "yellow"
        , text: "green"
        , baseline: "black"}
      , xLabelPadding: 3
      , xPadding: 5
      , label: 'Title'})
  , data = {
      x: ['t1', 't2', 't3', 't4'],
      y: [5, 1, 7, 5]
   }
screen.title = 'RGB Light Control';

// Create a box perfectly centered horizontally and vertically.
var box = blessed.box({
  top: 'center',
  left: 'center',
  width: '75%',
  height: '50%',
  content: '   RGB Control \n',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'green',
    bg: 'black',
    border: {
      fg: '#f0f0f0'
    },
  }
});
box.focus();
// Append our box to the screen.
screen.append(box);
var bar = contrib.bar(
     { label: 'RGB Light Control'
     , barWidth: 5
     , barSpacing: 6
     , xOffset: 20
     , maxHeight: 65535})
  screen.append(bar) //must append before setting data
  bar.setData(
     { titles: ['RED', 'Green', 'BLUE']
     , data: [0, 0,0]})

// Add a png icon to the box


// If our box is clicked, change the content.


// If box is focused, handle `enter`/`return` and give us some more content.
box.key('r', function(ch, key) {
  Rval=Rval+mult;
  bar.setData(
     { titles: ['RED', 'Green', 'BLUE']
     , data: [Rval, Gval,Bval]})
client.write('pwm '+Rval+' '+ Gval+' '+Bval +' \n');
  screen.render();
});
box.key('f', function(ch, key) {
  Rval=Rval-mult;
  bar.setData(
     { titles: ['RED', 'Green', 'BLUE']
     , data: [Rval, Gval,Bval]})
client.write('pwm '+Rval+' '+ Gval+' '+Bval +' \n');
  screen.render();
});
box.key('t', function(ch, key) {
  Gval=Gval+mult;
  bar.setData(
     { titles: ['RED', 'Green', 'BLUE']
     , data: [Rval, Gval,Bval]})
client.write('pwm '+Rval+' '+ Gval+' '+Bval +' \n');
  screen.render();
});
box.key('g', function(ch, key) {
  Gval=Gval-mult;
  bar.setData(
     { titles: ['RED', 'Green', 'BLUE']
     , data: [Rval, Gval,Bval]})
client.write('pwm '+Rval+' '+ Gval+' '+Bval +' \n');
  screen.render();
});
box.key('y', function(ch, key) {
  Bval=Bval+mult;
  bar.setData(
     { titles: ['RED', 'Green', 'BLUE']
     , data: [Rval, Gval,Bval]})
client.write('pwm '+Rval+' '+ Gval+' '+Bval +' \n');
  screen.render();
});
box.key('h', function(ch, key) {
  Bval=Bval-mult;
  bar.setData(
     { titles: ['RED', 'Green', 'BLUE']
     , data: [Rval, Gval,Bval]})
client.write('pwm '+Rval+' '+ Gval+' '+Bval +' \n');
  screen.render();
});


// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  client.destroy();
  return process.exit(0);
});

// Focus our element.


// Render the screen.
screen.render();
