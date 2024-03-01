import { createStore } from "vuex";
import axios from "axios";
const DB = "https://nodejsproject-1kx4.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    selectedProduct: null,
    products: null,
    product: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
      setSelectedProduct(state, product) {
        state.selectedProduct = product;
      },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const {results} = await (await axios.get(`${DB}users`)).data;
        context.commit("setUsers", results);
      } catch (e) {
        alert("Request Failed! Could not retrieve all users!");
      }
    },
    async fetchUser(context, id) {
      try {
        const {result} = await (await axios.get(`${DB}users/${id}`)).data;
        context.commit("setUser", result);
      } catch (e) {
        alert("Request Failed: Could not retrieve user!");
      }
    },
    async fetchProducts(context) {
      try {
        const {results} = (await axios.get(`${DB}products`)).data;
        context.commit("setProducts", results);
      } catch (e) {
        alert("Request Failed: Could not retrieve products from the database.");
      }
    },
    async fetchProduct({ context }) {
      try {
        const {results} = await axios.get((`${DB}products`)).data;
        context.commit("setProduct", results);
      } catch (e) {
        alert("Requested Failed: Could not fetch product.");
      }
    },
    async registerNewUser({ context },) {
      try {
        const {results} = await axios.post((`${DB}users`)).data;
        const { msg } = await (results);
        if (msg) {
          context.commit.dispatch("fetchUsers");
          context.commit("setUser", msg);
        }
      } catch (e) {
        alert("Request Failed: Could not register user.");
      }
    },
    async updateUser({ context },) {
      try {
        const {results} = await axios.patch((`${DB}users`).data);
        if (results) {
          context.commit.dispatch("fetchUsers");
          context.commit("setUser", results);
          alert("Update Successful")
        }
      } catch (e) {
        console.error(e);
        alert("Request Failed: An error occurred while trying to update the user.");
      }
    },
    async deleteUser({ context },) {
      try {
        const {results} = await axios.delete((`${DB}users/`).data);
        if (results) {
          context.commit("fetchUsers");
          context.commit("setUser", results);
          console.log("User deleted successfully");
        }
      } catch (e) {
        console.error(e);
        alert("Request Failed: An error occurred while deleting user.");
      }
    },
    async addProduct({ context },) {
      try {
        const {results} = await axios.post((`${DB}products`).data);
        if (results) {
          context.commit.dispatch("fetchProducts");
          context.commit("setProduct", results);
        }
      } catch (e) {
        console.error(e);
        alert("Request Failed: An error occurred while adding a new product.");
      }
    },
    async updateProduct({ context },) {
      try {
        const {results} = await axios.patch((`${DB}products/}`).data);
        if (results) {
          context.commit.dispatch("fetchProducts");
          alert("Successfully updated product!");
        } else {
          throw new Error("Failed to update product: ");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred: " + error);
      }
    },
    async deleteProduct({ context }, prodID) {
      try {
        const {results} = await axios.delete(`${DB}products/${prodID}`);
        if (results) {
          context.commit.dispatch("fetchProducts");
          context.commit("setProduct", results);
        }
      } catch (e) {
        alert("An error occurred while deleting the product");
      }
    },
  },
  modules: {
  }
})