AFRAME.registerSystem('background-cube', {
  init: function () {
    this.entities = [];
  },
  tick: function () {
    for (let i = 0; i < this.entities.length; i++) {
      const cube = this.entities[i];
      cube.object3D.position.x -= 0.05;
      if (cube.object3D.position.x <= -30) {
        cube.object3D.position.x = 30;
      }
    }
  },
  pause: function () {},
  play: function () {},
  registerCube: function(cube) {
    this.entities.push(cube);
  }
});
