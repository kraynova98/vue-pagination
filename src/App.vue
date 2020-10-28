<template>
  <div id="app">
    <div class="container">
        <Pagination :items="items" :perPage="10" page.sync="current">
          <template #default="list">
            {{ list }}
          </template>
        </Pagination>
        <!--      <template #paginator="{ page, setPage, total, perPage }"></template>-->
    </div>
  </div>
</template>

<script>
  import Pagination from "@/components/Pagination"

  export default {
    name: 'App',
    components: { Pagination },

    data() {
      return {
        users: ['Tom', 'Ben', 'Alex'],
        items: ['cat', 'dog', 'fox', 'bear', 'tuna', 'beaver'],
        current: ''
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .items {
    display: flex;
    flex-direction: column;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
