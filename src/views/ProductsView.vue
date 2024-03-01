<template>
  <div class="container">
    <div class="row">
      <div class="card p-0" v-for="Product in products" :key="Product.id"  style="width: 20rem;">
          <img :src="Product.prodUrl" class="card-img-top" >
          <div class="card-body">
            <h5 class="card-title">{{ Product.prodID }}</h5>
            <p class="card-title">{{ Product.prodName }}</p>
            <p class="card-text">{{ Product.amount }}</p>
            <p class="card-text">{{ Product.Category }}</p>
          </div>
        </div>
      </div>
  </div>
<div>
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
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <button @click="editProduct(product.id)">Edit</button>
        <button @click="deleteProduct(product.id)">Delete</button>
      </li>
    </ul>
    <router-link to="/products/new">Add Product</router-link>
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
</style>