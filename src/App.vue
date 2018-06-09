<template>
<div id="app">
  <a-scene background="black">
    <a-box v-for="n in playableCubes" class="playable" position="0 2 -10" rotation="0 0 0" scale="2 2 2" visible="false" v-on:click="onClick" playable></a-box>
    <a-box v-for="n in backgroundCubes" color="#00afde" :position="getRandomPosition(30, 5, -20)" rotation="0 0 0" scale="2 2 2" background-cube></a-box>
    <a-camera>
        <a-cursor color="white" fuse-timeout="300" raycaster="objects: .playable">
        <a-animation begin="click" easing="ease-in" attribute="scale" dur="300" fill="forwards" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
        <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale" dur="300" fill="backwards" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
      </a-cursor>
    </a-camera>
    </a-scene>
  </div>
</template>

<script>
// find a place to register these components and systems
import aframe from 'aframe';
import moveComponent from './aframe/components/playable';
import moveSystem from './aframe/systems/playable';
import backgroundSystem from './aframe/systems/background';
import backgroundComponent from './aframe/components/background';

export default {
  name: 'App',
  data() {
    return {
      playableCubes: 4,
      backgroundCubes: 40,
    };
  },
  methods: {
    onClick() {
      console.log('click');
    },
    getRandomPosition(limitX, limitY, z) {
      const x = Math.random() * limitX * 2 - limitX;
      const y = Math.random() * limitY * 2 - limitY;
      return `${x} ${y} ${z}`;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
