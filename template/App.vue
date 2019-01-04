<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  created(){
  }
};
 
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  height: 100%;
}
html{
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  background: #eee;
  height: 100%;
}
a{
  text-decoration: none;
}
.ala-loading .loading{
  background-image: url('https://img.51fanbei.com/h5/common/icon/loading01.gif') !important;
}
</style>
