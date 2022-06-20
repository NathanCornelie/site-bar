<template>
  <div class="b_container" @click="display_desc = !display_desc">
    <h4>{{ name }}</h4>
    <div
      class="b_desc"
      v-if="display_desc"
      @click="display_desc = !display_desc"
    >
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoissonV",
  data() {
    return {
      display_desc: true,
    };
  },
  props: {
    name: String,
    description: String,
    rate: Number,
  },
};
</script>

<style>
.b_container {
  border: 4px solid white;
  float:left;
  width:300px;
  padding: 5px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 30px;
  margin-left: 30px;
  background-color: rgba(232, 80, 80, 0.725);
}
.b_container h4 {
  font-size: 1.6rem;
}
.b_desc {
  display: flex;
  background-color: #fff;
  height: 100px;
  margin-top: 120px;
  width: 90%;
  margin-left:auto;
  margin-right: auto;
  
  
}
.b_desc p {
  display:table;
  flex: 1;
  font-size: 30px;
  margin:auto;
}
.b_container:active {
  background-color: red;
}
</style>
