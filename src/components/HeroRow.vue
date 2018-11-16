<template>
  <li class="h-hero">
    <div class="h-hero__icon">{{hero.classIcon}}</div>
    <div class="h-hero__name">{{hero.name}}</div>
    <div class="h-hero__class">{{hero.className}}</div>
    <div class="h-hero__level">{{hero.level}}</div>
    <button class="h-hero__delete">
      <v-icon name="times"></v-icon>
    </button>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IHero } from '../types/hero';

@Component
export default class HeroRow extends Vue {
  @Prop() private hero!: IHero;
}
</script>

<style scoped lang="scss">
@import '../scss/_variables.scss';
$h-hero-icon-width: 2.2rem;
.h-hero {
  display: block;
  font-size: 1.4rem;
  margin: 0;
  position: relative;
  text-align: left;
  padding: 1rem 3.5rem 1rem #{$h-hero-icon-width + 0.8rem};
  min-width: 200px;

  border-bottom: 1px solid #eee;

  .h-hero__icon {
    font-size: $h-hero-icon-width;
    position: absolute;
    left: 0;
  }
  .h-hero__name {
    font-weight: 600;
  }
  .h-hero__class {
    font-size: 1rem;
  }
  .h-hero__level {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .h-hero__delete {
    @include resetButton;
    color: $medium-grey-color;
    position: absolute;
    right: 0;
    top: calc(50% + 0.10rem);
    transform: translateY(-50%);
    &:focus {
      color: $assertive-color;
    }
  }
}
@media #{$breakpoint-sm} {
  .h-hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 540px;
    margin: auto;
    border: none;
  }
  .h-hero__name {
    display: inline-block;
  }
  .h-hero__class {
    display: inline-block;
    margin-right: 1.5rem;
  }
}
</style>