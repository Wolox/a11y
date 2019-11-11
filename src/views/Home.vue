<template lang="pug">
  .home-container
    .content
      h1.title
        | Anime list
      .filter-container
        input.filter-input(v-model='filterValue')
        img.icon(src='../assets/filter-icon.svg')
      h2.list-title
        | Mi lista
      .list-container
        template(v-if='filteredList.length > 0')
          router-link.card(v-for='anime in filteredList' :key='anime.id' @click='goToDetail(anime.id)' :to='{ name: routes.detail, params: { id: anime.id } }')
            img.image(:src='anime.image || defaultIcon')
            .description
              h3.card-title
                | {{ anime.name }}
              span
                | {{ anime.reviewStars }} / 10
        template(v-else)
          .empty-container
            img.image(src='../assets/add-to-list.svg')
            h3.empty-title
              | ¿Qué esperas?
            span.empty-subtitle
              | ¡Empieza a agregar animes a tu lista!
</template>

<script>
import { routes } from '../router'
import { db } from '../firebase'

import defaultIcon from '../assets/anime-icon.png'

export default {
  name: 'home',
  data () {
    return {
      filterValue: '',
      animeList: [],
      routes,
      defaultIcon
    }
  },
  computed: {
    filteredList () {
      return this.animeList
        .filter(item => item.name.toLowerCase().includes(this.filterValue.toLowerCase()))
        .sort((a, b) => a.name > b.name)
    }
  },
  mounted () {
    db.collection('anime').get().then(querySnapshot => {
      querySnapshot.forEach(doc => this.animeList.push({ id: doc.id, ...doc.data() }))
    })
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/variables/colors.scss';
@import 'src/scss/commons/miscellaneous';

.home-container {
  @extend .main-container;
  background: url('../assets/lake-path.jpg') no-repeat center center;

  .content {
    background: $white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 600px;
    padding: 30px;

    .filter-container {
      align-items: center;
      border: 2px solid $dark-gray;
      border-radius: 10px;
      display: flex;
      margin-bottom: 30px;
      padding: 5px 10px;

      .filter-input {
        background: transparent;
        color: $black;
        font-size: 1rem;
        line-height: 1.75rem;
        width: 100%;
      }
    }

    .list-title {
      font-size: 2rem;
      line-height: 2.5rem;
      margin-bottom: 15px;
    }

    .list-container {
      background: $white;
      height: 500px;
      overflow-y: scroll;

      .card {
        border: 1px solid $light-gray;
        border-radius: 10px;
        cursor: default;
        display: flex;
        overflow: hidden;
        width: 100%;

        &:not(:last-child) {
          margin-bottom: 10px;
        }

        .image {
          height: 100px;
          margin-right: 15px;
          max-width: 100px;
          width: 100%;
        }

        .description {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          padding: 5px 0;
          width: 100%;

          .card-title {
            font-size: 1.25rem;
            margin-bottom: 10px;
          }
        }
      }

      .empty-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;

        .image {
          height: 100px;
          margin-bottom: 40px;
          width: 100px;
        }

        .empty-title {
          font-size: 1.75rem;
          font-weight: bold;
          line-height: 2.25rem;
        }

        .empty-subtitle {
          font-size: 1.5rem;
          line-height: 2.2rem;
        }
      }
    }
  }
}
</style>
