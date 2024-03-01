<template>
  <main class="container-fluid">
   <NavBar></NavBar>
   <Footer></Footer>
   <CardView></CardView>
   <router-view/>
 </main>
</template>
<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import CardView  from './components/CardView.vue';
export default{
  components:{
    NavBar,
    Footer,
    CardView
  }
}
</script>
<style>
</style>

