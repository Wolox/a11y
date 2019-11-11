<template lang="pug">
  .new-container
    form.new-form(@submit.prevent='submitNewAnime')
      h1.title
        | Nuevo anime
      .name-field
        span.label(for='new-name')
          | Título
        input.input(v-model='name' id='new-name' name='new-name')
        transition(name='fade')
          span.error-msg(v-show='nameError' role='log')
            | Este campo es obligatorio
      .selects-container
        .review-field
          span.label(for='new-review')
            | Review
          select.review-select(v-model='reviewStars' id='new-review' name='new-review')
            option(disabled :value='null')
              | Elegir valoración
            option(v-for='review in reviewValues' :key='review.id' :value='review.value')
              | {{ review.value }}
          transition(name='fade')
            span.error-msg(v-show='reviewStarsError' role='log')
              | El valor debe estar entre 1 y 10
        .status-field
          span.label(for='new-status')
            | Estado
          select.status-select(v-model='status' id='new-status' name='new-status')
            option(disabled value='')
              | Elegir estado
            option(v-for='status in seenStatus' :key='status.id' :value='status.value')
              | {{ status.optionLabel }}
          transition(name='fade')
            span.error-msg(v-show='statusError' role='log')
              | Este campo es obligatorio
      .plot-field
        span.label(for='new-plot')
          | Descripción
        textarea.plot-input(v-model='plot' id='new-plot' name='new-plot')
      .link-field
        span.label(for='new-link')
          | Link
        input.input(v-model='link' id='new-link' name='new-link')
      transition(name='fade')
        .success-field(v-if='showSuccess')
          span.success-text
            | El animé fue agregado con éxito.
      button.main-button(type='submit')
        | Crear
</template>

<script>
import { required, between } from 'vuelidate/lib/validators'
import { db } from '../firebase'

import Navbar from '@/components/Navbar.vue'

import { reviewValues, seenStatus } from '../utils/constants'

export default {
  name: 'new',
  components: {
    Navbar
  },
  data () {
    return {
      name: '',
      reviewStars: null,
      status: '',
      plot: '',
      link: '',
      formHasError: false,
      reviewValues,
      seenStatus,
      showSuccess: false
    }
  },
  validations: {
    name: {
      required
    },
    reviewStars: {
      between: between(0, 10)
    },
    status: {
      required
    }
  },
  computed: {
    nameError () {
      return this.formHasError && !this.$v.name.required
    },
    reviewStarsError () {
      return this.formHasError && !this.$v.reviewStars.between
    },
    statusError () {
      return this.formHasError && !this.$v.status.required
    }
  },
  methods: {
    clearValues () {
      this.name = ''
      this.reviewStars = null
      this.status = ''
      this.plot = ''
      this.link = ''
    },
    submitNewAnime () {
      if (this.$v.$invalid) {
        this.formHasError = true
      } else {
        const { name, reviewStars, status, plot, link } = this
        this.formHasError = false
        db.collection('anime').add({ name, reviewStars, status, plot, link })
        this.showSuccess = true
        this.clearValues()
        setTimeout(() => { this.showSuccess = false }, 5000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/commons/display';
@import 'src/scss/commons/miscellaneous';

.new-container {
  @extend .main-container;
  background: $translucent no-repeat center center;

  .new-form {
    background: $white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    max-width: 460px;
    padding: 30px;
    width: 100%;

    .name-field {
      @extend .column;
      margin-bottom: 20px;

      .input {
        @extend .base-input;
      }
    }

    .selects-container {
      @extend .row;
      @extend .space-between;
      @extend .top;

      .review-field,
      .status-field {
        @extend .column;
        margin-bottom: 20px;
        width: 160px;

        .review-select,
        .status-select {
          @extend .base-input;
        }
      }
    }

    .plot-field {
      margin-bottom: 20px;

      .plot-input {
        @extend .base-input;
        resize: none;
        width: 100%;
      }
    }

    .link-field {
      @extend .column;
      margin-bottom: 20px;

      .input {
        @extend .base-input;
      }
    }

    .success-field {
      .success-text {
        color: $green;
      }
    }

    .label {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .error-msg {
      margin-top: 5px;
    }

    .main-button {
      align-self: flex-end;
      width: 120px;
    }
  }

  .label {
    margin-bottom: 5px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}

@media screen and (max-width: 390px) {
  .new-container {
    .new-form {
      .selects-container {
        flex-direction: column;

        .review-field,
        .status-field {
          width: 100%;
        }
      }
    }
  }
}
</style>
