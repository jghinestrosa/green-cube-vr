<template>
  <a-box class="playable" position="0 2 -10" rotation="0 0 0" scale="2 2 2" visible="false" v-on:click="onClick" playable></a-box>
</template>

<script>
export default {
  name: 'PlayableCube',
  methods: {
    onClick(event) {
      event.target.object3D.visible = false;
    },
  },
};
</script>

<style>
</style>
