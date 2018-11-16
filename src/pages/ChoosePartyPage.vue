<template>
  <div class="party-page">
    <h1>{{title}}</h1>
    <ul class="h-heroes">
      <HeroRow v-for="hero in party" :hero="hero" :key="hero.heroID" @delete="deleteHero(hero)" />
    </ul>

    <label>
      <h4>Name</h4>
      <input type="text" v-model="newHero.name" />
    </label>

    <button class="btn btn-large btn-block" @click="addHero()">Add</button>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HeroRow from '../components/HeroRow.vue';
import { IHero } from '../types/hero';
import { filter } from 'lodash/fp'

@Component({
  components: {
    HeroRow,
  },
})
export default class ChoosePartyPage extends Vue {

  party: IHero[] = [{
    name: 'Luke',
    className: 'Light Mage',
    classIcon: '⭐️',
    level: 1,
    heroID: '1',
  }, {
    name: 'Hiro',
    className: 'Knight',
    classIcon: '🛡',
    level: 1,
    heroID: '2',
  }, {
    name: 'Jack Frost',
    className: 'Ice Mage',
    classIcon: '❄️',
    level: 1,
    heroID: '3',
  }, {
    name: 'Jeremy',
    className: 'Fire Mage',
    classIcon: '💥',
    level: 1,
    heroID: '4',
  }];

  newHero: {
    name: string
  };

  @Prop() private title!: string;

  constructor() {
    super();
    this.resetForm();
  }
  
  deleteHero(hero: IHero) {
    this.party = filter((h) => h !== hero, this.party);
  }

  addHero() {
    const newHero = {
      ...this.newHero,
      className: 'Light Mage',
      classIcon: '⭐️',
      level: 1,
      heroID: new Date() + ''
    };
    this.party = [...this.party, newHero];
    this.resetForm();
  }

  resetForm() {
    this.newHero = {
      name: ''
    };
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_variables.scss';
h1 {
  font-size: 2.5rem;
  color: $primary-color;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.h-heroes {
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0 1rem;
  @media #{$breakpoint-sm} {
    margin-top: 2rem;
  }
}
</style>
