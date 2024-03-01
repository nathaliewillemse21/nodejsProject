<template>
  <div>
    <BounceLoader :loading="isLoading" />
  </div>
</template>

<script>
import { BounceLoader } from 'vue-spinner';

export default {
  components: {
    BounceLoader,
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>
