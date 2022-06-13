var nodesjs = new NodesJs({
  id: 'nodes',
  width: window.innerWidth,
  height: window.innerHeight,
  particleSize: 6,
  lineSize: 2,
  particleColor: [252, 147, 18, 0.2],
  lineColor: [255, 250, 250],
  backgroundFrom: [21, 31, 41],
  backgroundTo: [31, 41, 51],
  backgroundDuration: 10000,
  nobg: false,
  number: window.hasOwnProperty('orientation') ? 30: 100,
  speed: 20,
  pointerCircleRadius: 150
});