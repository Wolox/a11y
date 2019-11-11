<template lang="pug">
  .content
    button.back-button(type='button')
      img.icon(src='../assets/back-arrow-icon.svg' @click='goToList' id='back-arrow')
      span.text(for='back-arrow')
        | Volver
    h1.title
      | {{ title }}
    .data-container
      img.image(v-if='data.image' :src='data.image')
      h2.name
        | {{ data.name }}
      .stars-container
        h3.review
          | Reviews:
        span.text
          | {{ data.reviewStars }} / 10
      .status-container
        h3.status
          | Estado:
        span.text(:class='{ [data.status]: data.status }')
          | {{ setStatusText }}
      h3.plot
        | Argumento
      p.text
        | {{ data.plot }}
      p.text
        | Para más info, podés ingresar
        a.link(:href='data.text')
          | aquí
</template>

<script>
import { routes } from '../router'
export default {
  props: {
    title: { type: String, required: true },
    data: { type: Object, required: true }
  },
  computed: {
    setStatusText () {
      return this.data.status === 'seen'
        ? 'Visto'
        : this.data.status === 'pending' ? 'Pendiente' : 'En curso'
    }
  },
  methods: {
    goToList () {
      this.$router.push({ name: routes.home })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables/_colors.scss';

.content {
  background: $white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 30px;

  .back-button {
    display: flex;

    .icon {
      margin-right: 5px;
    }
  }

  .data-container {
    height: 600px;
    overflow-y: scroll;

    .image {
      max-width: 540px;
      width: 100%;
    }

    .name {
      color: $black;
      font-size: 2.75rem;
      line-height: 3.25rem;
      margin: 10px 0 15px;
    }

    .stars-container,
    .status-container {
      display: flex;
      text-align: end;
      margin-bottom: 10px;
    }

    .review,
    .status,
    .plot {
      font-size: 1.25rem;
      line-height: 2rem;
      font-weight: bold;
    }

    .review,
    .status {
      margin-right: 5px;
    }

    .plot {
      margin-bottom: 5px;
    }

    .text,
    .link {
      font-size: 1.2rem;
      line-height: 2rem;
      text-align: justify;
    }

    .link {
      color: $black;
      margin-left: 5px;
    }

    .seen {
      color: $green;
    }

    .started {
      color: $orange;
    }

    .pending {
      color: $red;
    }
  }
}
</style>
