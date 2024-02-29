<template>
    <nav class="container-fluid navbar navbar-expand-lg custom-navbar " id="navbar">
   <div class="container-fluid">
    <!-- logo -->
         <!-- <RouterLink to="/">
     <img class="img-fluid" loading="lazy" src="../assets/T & J (2).png" alt="logo" id="logo">
    </RouterLink> -->
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
             <RouterLink to="/product" class="nav-link active text-black">
                 Product
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
 #navabar{
    background-color: black;
 }

 </style>
