<template>
    <div class="container-fluid fixed-bottom">
        <div id="app"></div>
        <div class="row">
            <p class="lead">N&N's phone covers &copy;
                <span> {{currYear}}</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FooterComp',
    data() {
        return{
            currYear: new Date().getFullYear()
        }
    }

}
</script>

<style>
  .container-fluid.fixed-bottom {
    background-color: #333; 
    color: white; 
    padding: 10px 0; 
    position: fixed; 
    width: 100%; 
    bottom: 0; 
    text-align: center; 
  }

  .lead {
    margin-bottom: 0; 
  }

  .lead span {
    font-weight: bold; 
  }
</style>
