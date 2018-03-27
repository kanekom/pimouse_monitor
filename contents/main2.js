var ros = new ROSLIB.Ros({ url : 'ws://' + location.hostname + ':9000' });

ros.on('connection', () => { console.log('websocket: connected'); });
ros.on('error', (error) => { console.log('websocket: error: ', error); });
ros.on('close', () => { console.log('websocket: error: closed'); });

var ls = new ROSLIB.Topic({
  ros : ros,
  name : '/lightsensors',
  messageType : 'pimouse_ros/LightSensorValues',
});

ls.subscribe((message) => {
  str = JSON.stringify(message);
  document.getElementById("lightsensors").innerHTML = str;
  console.log(str)
});
