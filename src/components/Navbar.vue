<template lang="pug">
nav.navbar(aria-label='Navegación principal')
  ul.menu-bar(aria-label='Navegación principal')
    li.menu-item-li(v-for='item in navbarItems' :key='item.id')
      router-link.menu-item(:to='{ name: item.to }' exact-active-class='active-route')
        span.menu-item-label
          | {{ item.label }}
        img.menu-item-icon(:src='item.img' :alt='item.alt')
</template>

<script>
import { navbarItems } from '../utils/constants'

export default {
  data () {
    return {
      navbarItems
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/variables/colors';
@import 'src/scss/commons/miscellaneous';

li > a:focus {
  border: 1px dotted orange;
}

.navbar {
  background: $white;
  position: fixed;
  width: 100%;

  .menu-bar {
    display: flex;
    list-style: none;

    .menu-item-li {
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 10px;
      }

      .menu-item {
        align-items: center;
        display: flex;
        padding: 0 5px;

        .menu-item-label {
          color: $black;
          font-size: 1rem;
          line-height: 1.75rem;
          margin-right: 5px;
          padding: 5px 0;
        }

        .menu-item-icon {
          @extend .icon;
        }
      }
    }

    .active-route {
      border-bottom: 4px solid $blue;
    }
  }

  .menu-item {
    border-bottom: 4px solid transparent;
  }
}
</style>
