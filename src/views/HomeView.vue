<template>
  <div class="home display-3">
    <div id="body">
      <h1 class="container display-1" id="text"></h1>
      <button class="shop-now-button">Shop Now</button>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const textElement = document.getElementById('text');
    const originalText = "NATHZ AND NATHI'S PHONE COVERS";
    let currentIndex = 0;
    function typeText() {
      if (currentIndex < originalText.length) {
        textElement.textContent += originalText.charAt(currentIndex);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }
    const typingInterval = setInterval(typeText, 100);
  },
};
</script>
<style scoped>
#body {
  width: auto;
  height: 100vh;
  background-image: url("https://i.postimg.cc/sxs5xgfS/1786420767-1.webp");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
  color: white; /* Add this line to set text color to white */
}
.shop-now-button {
  background-color: #C7B39E;
  color: #fff;
  padding: 10px;
  font-size: 20px;
  border: none;
  border-radius: 1px;
  cursor: pointer;
}
.shop-now-button:hover {
  background-color: #F9C48B;
}
</style>

(102 kB)
