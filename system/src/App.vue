<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
html,body{
  height: 100%;
}
#app {
  height: 100%;
}

#nav {

}
</style>
