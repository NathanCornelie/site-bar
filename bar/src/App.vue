<template>
  <router-view></router-view>
</template>

<script>
/**TODO:
 * -finir de faire le template de boisson 
 * -faire le css de boisson
 * - chercher le pluggin image de vue pour ca propremeent avec les img
 * 
 * -rendre la navigation inter page plus facile pour les user 
 * -Rendre le site un peu plus bg ds l'ensemble
 */
export default {
  name: 'App',
  data () {
    return {
      cat : true,
      }
  },
  components: {
    
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
 
}
body{
  background-color:rgba(66, 203, 82, 0.636);
}

</style>
