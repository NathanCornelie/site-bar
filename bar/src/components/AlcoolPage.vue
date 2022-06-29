<template>
  <!-- header bar with the title -->
  <div class="header_bar">
    <a href="/"
      ><font-awesome-icon
        :icon="['fas', 'home']"
        size="2x"
        color="black"
        class="home_icon"
    /></a>

    <h3>Alcool</h3>
  </div>
  <!-- end of  header -->

  <!-- Page's content -->
  <div class="boissons_container">
    <BoissonV
      v-for="b in listOfBoissons"
      :key="b"
      :name="b.name"
      :description="b.description"
      :rate="b.rate"
    />
  </div>
</template>

<script>
import BoissonV from "./Boisson.vue";
export default {
  name: "AlcoolPage",
  components: {
    BoissonV,
  },
  data() {
    return {
      listOfBoissons: [
        {
          name: "Pina Colada",
          rate: 5,
          description: "Coco, Jus d'ananas, Rhum",
        },
        {
          name: "Vodka coca",
          rate: 3,
          description: "just some Russian pee and Coca",
        },
        {
          name: "Sex on the bitch",
          rate: 3,
          description: "Vodka, Liqueur de pêche Jus de Cranberry",
        },
        {
          name: "Sex on the bitch",
          rate: 3,
          description: "Vodka, Liqueur de pêche Jus de Cranberry",
        },
        {
          name: "Sex on the bitch",
          rate: 3,
          description: "Vodka, Liqueur de pêche Jus de Cranberry",
        },
      ],
    };
  },
};
</script>

<style>
.header_bar {
  border-bottom: 1px solid;
  border-top: 1px solid;
  background-color: rgb(71, 229, 103);
}
.header_bar a {
  display: flex;
  float: left;
  margin-left: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.boissons_container{
  width: 80%;
  margin:0px auto 0px;
  padding: 15px;
  height: 100%;
  
  
}
</style>
