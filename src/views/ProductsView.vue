<template>
  <div>
            <h2 class="products">Products</h2>
      <label for="search">Search:</label>
      <input v-model="search" @input="filterProducts" />
      <label for="sort">Sort by:</label>
      <select v-model="sortKey" @change="sortProducts">
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
  <div class="container">
    <div class="row">
      <div class="card p-0" v-for="product in products" :key="product.prodID"  style="width: 20rem;">
          <img :src="product.prodUrl" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodID }}</h5>
            <p class="card-title">{{ product.prodName }}</p>
            <p class="card-text">{{ product.amount }}</p>
            <p class="card-text">{{ product.Category }}</p>
          </div>
          <div class="button">
            <button @click="viewMore(product.prodID)" class="buttn">ViewMore</button>
          </div>
        </div>
      </div>
  </div>
<div>
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <button @click="editProduct(product.id)">Edit</button>
        <button @click="deleteProduct(product.id)">Delete</button>
      </li>
    </ul>
  </div>
  </template>
  <script>
  import CardView from '@/components/CardView.vue'
  export default {
    name: 'ProductsView',
    CardView,
    computed:{
        products(){
            return this.$store.state.products
        },
        mounted(){
            return this.$store.dispatch('fetchProducts')
        }
    },
    props: ['product'],
    methods: {
      editProduct(id) {
        this.$router.push(`/products/${id}/edit`);
      },
      deleteProduct(id) {
        alert(`Delete product with id ${id}`);
      },
    },
  };
  
  </script>
  <style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px;
}

.card {
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.card:hover {
    transform: scale(1.05);
}

.card-img-top {
    max-height: 200px;
    object-fit: cover;
}

.card-body {
    padding: 15px;
}

.card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.card-text {
    font-size: 1rem;
    margin-bottom: 5px;
}
.search-input {
    margin-right: 10px;
    padding: 5px;
  }

  .sort-select {
    padding: 5px;
  }

</style>