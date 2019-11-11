<template lang="pug">
  .detail-container
    details-form(title='Detalle' :data='query')
</template>

<script>
import DetailsForm from '@/components/DetailsForm'
import { db } from '../firebase'

export default {
  name: 'detail',
  components: { DetailsForm },
  data () {
    return {
      query: {}
    }
  },
  mounted () {
    db.collection('anime')
      .doc(`${this.$route.params.id}`)
      .get()
      .then(doc => { this.query = doc.data() })
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/commons/miscellaneous';

.detail-container {
  @extend .main-container;
  background: url('../assets/green-plain.jpg') no-repeat center center;
}
</style>
