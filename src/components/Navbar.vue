<template lang="pug">
nav.navbar
  ul.menu-bar
    li.menu-item-li(v-for='item in navbarItems' :key='item.id')
      router-link.menu-item(:to='{ name: item.to }' exact-active-class='active-route')
        span.menu-item-label
          | {{ item.label }}
        img.menu-item-icon(:src='item.img')
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

.navbar {
  background: $white;
  position: fixed;
  width: 100%;

  .menu-bar {
    display: flex;
    list-style: none;

    .menu-item-li {
      &:not(:last-child) {
        margin-right: 10px;
      }

      .menu-item {
        align-items: center;
        cursor: default;
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
