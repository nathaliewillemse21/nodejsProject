<template>
  <div class="container">
    
      <h1 class="text">About Us</h1></div>
      <div class="image">
      <img src="https://i.postimg.cc/fTHscC0t/s-l500.jpg" class="img-fluid w-50  h-50 d-flex" loading="lazy" alt="about-img">
    <div id="about-us">
      <span><p class="about-content"><b>We have had humble beginnings, starting out by selling bits and bobs at college/university halls.
We learnt the significance of sourcing quality products at discounted prices and passing on the savings to our customers.
      We also learnt the importance of providing great customer service. Utilising online messaging tools on top e-commerce marketplace platforms and social networking websites to truly interact with our customers. Using these great channels to form meaningful and ongoing relationships.We source all our products from reputable and authorised manufactures / distributors. We test and approve products making sure everything is up to standard.
   Our team is determined to find quality products that perform as advertised. We make sure non are making false claims and do exactly what they claim on the tin.
Our ability to source mobile accessories globally and our reputation in the authorised distributor network is what gives NATHZ AND NATHI’S PHONE COVERS the competitive edge.
We are catering to businesses of all sizes. Offering wholesale prices with no minimum order requirements to small traders, merchants, retailers and even large wholesalers.</b></p>
      </span>
    </div>
  </div>
</template>
<style scoped>
*{
  background-color:#C7B39E ;
}
/* .container {
  display: flex;
  justify-content: center;
  background-color: #C7B39E;
} */
h1{
  justify-content:center ;
  align-items: center;
  font-size: 3rem;
}
.image{
 display: flex;
 justify-content: center;
 align-content: center;
 }
 p{
  margin: 2rem;
  padding: 3rem;
 }
 /* .text {
  flex: 1;
  padding-left: 20px;
}  
#about-us {
  font-size: large;
  margin-bottom: 20px;
}
h1 {
   font-size: 3em;
}
p {
  line-height: 1.6;
} */

@media screen and (width < 700px){
  .about-content{
    overflow-y: scroll;
    height: 20rem;
    scroll-snap-type: y mandatory;
  }
}


</style>


