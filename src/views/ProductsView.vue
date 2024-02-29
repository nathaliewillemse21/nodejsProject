<template>
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
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }}
          <button @click="editProduct(product.id)">Edit</button>
          <button @click="deleteProduct(product.id)">Delete</button>
        </li>
      </ul>
  </template>
  <script>
  export default {
    props: ['products'],
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