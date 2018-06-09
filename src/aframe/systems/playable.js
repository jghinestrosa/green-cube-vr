// TODO: find a way to replace hard-coded values with variables
AFRAME.registerSystem('playable', {
  init: function () {
    this.entities = [];
    this.visibles = [];
    this.total = 4;
    this.delta = 1000; // ms
    this.time = 0;
    this.greenPercentage = 0.75;
  },
  tick: function () {
    if (this.entities.length > 0 && this.visibles.length < this.total) {
      if (Date.now() - this.time > this.delta) {
        let color = 'red';

        if (Math.random() > this.greenPercentage) {
          color = 'green';
        }

        const cube = this.entities.pop();
        cube.object3D.position.x = -50;
        cube.object3D.position.y = Math.floor((Math.random() * 11) - 5);
        cube.object3D.visible = true;
        cube.setAttribute('color', color);
        this.visibles.push(cube);
        this.time = Date.now();
      }
    }

    let indexToRemove = null;
    for (let i = 0; i < this.visibles.length; i++) {
      const cube = this.visibles[i];
      cube.object3D.position.x += 0.3;
      if (cube.object3D.position.x >= 50) {
        indexToRemove = i;
      }
    }

    if (indexToRemove !== null) {
      const cube = this.visibles[indexToRemove];
      this.visibles.splice(indexToRemove, 1);
      this.entities.push(cube);
    }

  },
  pause: function () {},
  play: function () {},
  registerCube: function(cube) {
    this.entities.push(cube);
  }
});
