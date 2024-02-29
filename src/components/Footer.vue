<template>
    <div class="container-fluid fixed-bottom">
        <div id="app"></div>
        <div class="row">
            <p class="lead">Unathi Gcetywa's Portfolio &copy;
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