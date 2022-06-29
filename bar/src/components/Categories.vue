<template>
<div class="title_container">
  <h1>azy pas d'inpi pour le  titre</h1>
</div>
  <div class="cat_container">
    <Category category="Avec Alcool" class="aa" @click="GoTo('aa')" />
    <Category category="Sans Alcool" class="sa" @click="GoTo('sa')" />
  </div>
</template>

<script>
import Category from "./Category.vue";
export default {
  name: "CategoriesV",
  components: {
    Category,
  },
  methods: {
    GoTo(link) {
      this.$emit("unshowCat");
      if (link == "aa") {
        this.$router.push("Alcool");
        return;
      }
      if (link == "sa") {
        this.$router.push("Soft");
      }
    },
  },
};
</script>

<style>
.cat_container {
  display: flex;
  margin: 20px auto 0;
  width: 80%;
  height: 800px;
  
}
.aa {
  
  background-color: aqua;
  filter: grayscale(50%);
  background-size: cover;
}
.sa {
  background-color: aquamarine;
  margin-left: 20%;
  filter: grayscale(50%);
  float: right;
}

.title_container{
  margin: 20px auto 0px;
  width: 50%;
  border: 1px solid green;
}
</style>
