<template>
    <div>
      <table>
        <h2 class="display-5 text-dark  ">Products</h2>
     <table class="container ">
            <tr class="bg-success text-dark">
                <th>Image</th>
                <th>Product ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Action</th>
            </tr>
            <tbody v-if="products">
              <tr v-for="product in products" :key="product.prodID">
                <td><img :src="product.prodUrl" style="height: 100px;" /></td>
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.Category }}</td>
                <td> R {{ product.amount }}</td>
                <td>{{ product.prodImage }}</td>
                <td>
                    <div class="row">
                <button class="btn2 " @click="editproduct(products)">Edit</button>
                <button class="btn2 " @click="deleteproduct(products.productID)">Delete</button>
                <button class="btn2 " @click="addproduct(products.productID)">add</button>
              </div>
                </td>
              </tr>
            </tbody>
        </table>
      </table>
    </div>
  </template>
  <script>
  export default {
    computed: {
      users() {
        return this.$store.state.users;
      },
      products() {
        return this.$store.state.products;
      },
    },
    mounted() {
      this.$store.dispatch('fetchProducts');
    },
  };
  </script>
  
  
  
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #C7B39E;
  }
  .btn2 {
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
}


.btn2:nth-child(1) {
    background-color: #C7B39E; 
    color: #0c0c0c; 
}


.btn2:nth-child(2) {
    background-color: #C7B39E; 
    color: #070606; 
}

/* Add button styles */
.btn2:nth-child(3) {
    background-color: #C7B39E; 
    color: #050404;
}


.btn2:hover {
    opacity: 0.8;
}

  </style>
