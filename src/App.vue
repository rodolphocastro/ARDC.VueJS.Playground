<template>
  <div id="app">
    <main class="container app-container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>

.page-logo{
    width: 240px;
    height: 240px;
}

.app-container{
  text-align: center;
}

</style>
