<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <ChoosePartyPage title="Create Your Party" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChoosePartyPage from './pages/ChoosePartyPage.vue';

@Component({
  components: {
    ChoosePartyPage,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  @import './scss/_variables.scss';
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dark-color;
  margin-top: 60px;
}
</style>
