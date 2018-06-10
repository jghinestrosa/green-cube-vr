<template>
<div id="app">
  <a-scene background="black">
    <playable-cube v-for="n in playableCubes"></playable-cube>
    <background-cube v-for="n in backgroundCubes"></background-cube>
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
import PlayableCube from './components/PlayableCube';
import BackgroundCube from './components/BackgroundCube';

export default {
  name: 'App',
  components: {
    PlayableCube,
    BackgroundCube
  },
  data() {
    return {
      playableCubes: 4,
      backgroundCubes: 40,
    };
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
