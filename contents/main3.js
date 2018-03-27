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
  Object.keys(message).forEach((e) => {
    $("#"+e).html(message[e]);
  });
});

document.getElementById('camstream').data = 'http://'
  + location.hostname
  + ':10000/stream?topic=/cv_camera_node/image_raw';
