<template>
  <main class="container-fluid">
   <NavBar></NavBar>
   <Footer></Footer>
   <router-view/>
 </main>
</template>
<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
export default{
  components:{
    NavBar,
    Footer,
  }
}
</script>
<style>
</style>

