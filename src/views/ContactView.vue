<template>
    <div class="container-fluid my-5 " id="Form">
    <div class="row">
      <h1>Contact Us</h1>
        
        <div class="col md-6 c">
            <form action="https://formspree.io/f/xnqevlpj" method="post">
                <div class="mb-3 ">
                  <label for="#FirstName" class="form-label"></label>
                  <input type="text" class="form-control" name="Fullname" id="FirstName" aria-describedby="#Fullname" placeholder="Fullname" required>
                </div>
                <div class="mb-3">
                  <label for="#Surname" class="form-label"></label>
                  <input type="text" class="form-control" name="Surname" required id="Surname" aria-describedby="#Surname" placeholder="Surname">
                </div>
                <div class="mb-3">
                  <label for="#Email" class="form-label"></label>
                  <input type="Email" class="form-control" name="Email" required id="Email" aria-describedby="#Email" placeholder="Email
                  ">
                </div>
                <div class="mb-3">
                  <label for="#Message" class="form-label"></label>
                  <textarea class="form-control" id="Message" rows="3" placeholder="Message"></textarea>
                </div>
                <button type="submit" class="btn btn-dark " target="_blank">Submit</button>
              </form>
        </div>
        
        <div class="col">
            <div class="align-items-center">
                <a href="https://maps.app.goo.gl/ejiyCsYFAuQjE7icA"   class="text-dark mx-2">
                 <i class="bi bi-geo-fill"></i> </a>    1 Bester Road, Anchorage, Bellville South, Cape Town, 7800
            </div>
            <div class="d-flex align-items-center">
            <a  class="text-dark mx-2"><i class="bi bi-envelope-at-fill"></i></a>
            <p>nathzandnathi@gmail.com</p>
            </div>
            <div class="d-flex align-items-center">
                <a  class="text-dark mx-2"><i class="bi bi-telephone-fill"></i></a>
                <p> 071 017 7055</p>
                </div>
        </div>
    </div>
    </div>
    </template>
    <style>
    #Form {
      background-color: #C7B39E; 
      padding: 30px; 
    }
  
    form {
      max-width: 400px; 
      margin: auto; 
    }
  
    .form-label {
      display: none; 
    }
  
    .form-control {
      width: 100%;
      margin-bottom: 15px; 
    }
  
    button {
      background-color: #C7B39E; 
      color: #fff; 
      border: none; 
      padding: 10px 20px; 
      cursor: pointer; 
    }
  
    button:hover {
      background-color:#C7B39E; 
    }
  
    .col {
      padding: 15px; 
    }
  
    .align-items-center {
      display: flex;
      align-items: center;
      margin-bottom: 10px; 
    }
  
    .text-dark {
      color: #343a40; 
    }
  
    .mx-2 {
      margin-right: 10px; 
    }
  
    p {
      margin-bottom: 0; 
    }
  </style>
  