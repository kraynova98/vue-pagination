<template>
  <section>
    <b-field grouped group-multiline>
      <b-field label="Total">
        <b-input type="number" v-model="total"></b-input>
      </b-field>
      <b-field label="Items per page">
        <b-input type="number" v-model="perPage"></b-input>
      </b-field>
    </b-field>
    <slot></slot>
    <hr>
    <b-pagination
        :total="total"
        v-model="current"
        :per-page="perPage"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page">
    </b-pagination>
  </section>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    page: {
      type: Number
    }
  },

  computed: {
    numberOfPage: {
      get() {
        return this.page;
      }
    }
  },

  data() {
    return {
      total: 200,
      current: 10,
      perPage: 10,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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

section {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
