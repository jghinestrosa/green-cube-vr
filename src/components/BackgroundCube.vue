<template>
  <a-box color="#00afde" :position="getRandomPosition(30, 5, -20)" rotation="0 0 0" scale="2 2 2" background-cube></a-box>
</template>

<script>
export default {
  name: 'BackgroundCube',
  methods: {
    getRandomPosition(limitX, limitY, z) {
      const x = Math.random() * limitX * 2 - limitX;
      const y = Math.random() * limitY * 2 - limitY;
      return `${x} ${y} ${z}`;
    },
  },
};
</script>

<style>
</style>
