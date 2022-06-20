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
  float: left;
  width: 40%;
  height: 50%;
  padding: 20px;
  margin-top: 50px;
  border-radius: 3%;
}


.category h3 {
  color: white;
  margin: auto;
  width: 45%;
  animation: mymoveb 0.2s linear;
  font-size: 1.7rem;
  width: 100%;
}

.category:hover h3{
    animation: mymove 0.2s linear;
  font-size: 2.3rem;
  width: 100%;
}

@keyframes mymove {
  from {
    font-size: 1.5rem;
  }
  to {
    font-size: 2.3rem;
  }
}

@keyframes mymoveb {
  from {
    font-size: 2.3rem;
  }
  to {
    font-size: 1.5rem;
  }
}


</style>
