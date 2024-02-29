<template>
    <div class="container-fluid my-5 " id="Form">
    <div class="row">
        <!-- left side -->
        <div class="col md-6 c">
            <form action="https://formspree.io/f/mrgwrqzo" method="post">
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
        <!-- right side -->
        <div class="col">
            <div class="align-items-center">
                <a href="https://maps.app.goo.gl/ejiyCsYFAuQjE7icA"   class="text-dark mx-2">
                 <i class="bi bi-geo-fill"></i> </a>    Eyethu Shopping Center, Mongezi Road, Khayelitsha, Cape Town, 7784
            </div>
            <div class="d-flex align-items-center">
            <a  class="text-dark mx-2"><i class="bi bi-envelope-at-fill"></i></a>
            <p>itskhanyilebakery@gmail.com</p>
            </div>
            <div class="d-flex align-items-center">
                <a  class="text-dark mx-2"><i class="bi bi-telephone-fill"></i></a>
                <p> 073 166 6985</p>
                </div>
        </div>
    </div>
    </div>
    </template>