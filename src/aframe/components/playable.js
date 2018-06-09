AFRAME.registerComponent('playable', {
  schema: {},
  init: function () {
    this.system.registerCube(this.el);
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});
