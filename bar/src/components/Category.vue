<template>
  <div class="category">
    <h3>{{ category }}</h3>
  </div>
</template>

<script>
export default {
  name: "CategoryV",
  props: {
    category: String,
  },
};
</script>

<style>
.category {
  display: flex;
  position: relative;

  width: 40%;
  height: 70%;

  margin-top: 50px;
  border-radius: 3%;
}

.category h3 {
  color: white;
  margin: auto;
  animation: mymoveb 0.2s linear;
  font-size: 2.7rem;
  width: 100%;
}

.category:hover h3 {
  animation: mymove 0.2s linear;
  font-size: 3.3rem;
  width: 100%;
}

@keyframes mymove {
  from {
    font-size: 2.7rem;
  }
  to {
    font-size: 3.3rem;
  }
}

@keyframes mymoveb {
  from {
    font-size: 3.3rem;
  }
  to {
    font-size: 2.7rem;
  }
}
</style>
