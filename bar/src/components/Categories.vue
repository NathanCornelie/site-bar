<template>
  <div class="cat_container">
    <Category category="Avec Alcool" class="aa" @click="GoTo('aa')"/>
    <Category category="Sans Alcool" class="sa" @click="GoTo('sa')"/>
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
    GoTo(link){
        this.$emit("unshowCat");
        if(link=='aa'){
            this.$router.push('Alcool')
            return;
        }
        if(link=='sa'){
            this.$router.push('Soft')
        }
    }
  },
};
</script>

<style>
.cat_container {
  margin: 20px auto 0;
  width: 80%;
  height:800px;
  padding: 20px;
}
.aa {
  margin-right: 40px;
  background-color: aqua;
  filter: grayscale(50%);
  background-size: cover;
}
.sa{
     background-color: aquamarine;
  margin-left: 40px;
  filter: grayscale(50%);
  float: right;
}
</style>
