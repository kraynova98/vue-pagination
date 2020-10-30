<template>
  <section>
    <div class="inputs"></div>
    <b-field grouped group-multiline>
      <b-field label="Total">
        <b-input type="number" v-model="itemsTotal"></b-input>
      </b-field>
      <b-field label="Items per page">
        <b-input type="number" v-model="perPage"></b-input>
      </b-field>
    </b-field>
      <slot name="list" :list="list"></slot>
    <hr>
    <b-pagination
        :total="itemsTotal"
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
    items: {
      type: Array
    }
  },

  computed: {
    list: function() {
      return this.items.slice((this.current - 1) * this.perPage, this.perPage * this.current);
    },

    itemsTotal: function() {
      return this.items.length;
    }
  },

  data() {
    return {
      current: 1,
      perPage:5
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
  display: flex;
  flex-direction: column;
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
