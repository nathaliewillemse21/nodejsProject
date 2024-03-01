<template>
    <nav class="navbar navbar-expand-lg" id="navbar">
   <div class="container-fluid">
    <!-- logo -->
         <RouterLink to="/">
     <img class="img-fluid" loading="lazy" src="https://i.postimg.cc/cLVf01Vx/N.png" alt="logo">
    </RouterLink>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
       <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <RouterLink to="/" class="nav-link active text-black">
             Home
           </RouterLink>
         </li>
         <li class="nav-item">
             <RouterLink to="/about" class="nav-link active text-black">
                 About
           </RouterLink>
         </li>
         <li class="nav-item">
             <RouterLink to="/products" class="nav-link active text-black">
                 Products
           </RouterLink>
         </li>
         <li class="nav-item">
             <RouterLink to="/users" class="nav-link active text-black">
                 Users
           </RouterLink>
         </li>
         <li class="nav-item">
             <RouterLink to="/admin" class="nav-link active text-black">
                 Admin
           </RouterLink>
         </li>
         <li class="nav-item">
             <RouterLink to="/contact" class="nav-link active text-black">
                 Contact
           </RouterLink>
         </li>
       </ul>
     </div>
   </div>
 </nav>
 </template>
 <script>
     export default {
         name:'NavBarComp',
     }
 </script>
 <style>
 #navbar {
   background-color: #C7B39E;
   padding: 10px 0; 
 }

 img[alt='logo'] {
   max-height: 50px; 
 }

 .navbar-toggler-icon {
   background-color: rgb(255, 255, 255); 
 }

 .navbar-nav .nav-link {
   color: white; 
   margin-right: 15px;
 }

 .navbar-nav .nav-link:hover {
   color: rgb(128, 128, 128); 
 }

 .navbar-nav .nav-link.active {
   font-weight: bold; 
 }
</style>
