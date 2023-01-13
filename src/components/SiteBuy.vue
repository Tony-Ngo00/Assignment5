<script setup>
import { useStore } from "../store/index.js";
import router from "../router";
import SiteModal from "../components/SiteModal.vue";
import { ref } from "vue";

const store = useStore();
await store.getMovies();

const showModal = ref(false);
const selectedId = ref(0);

function addCart() {
  router.push("/cart");
}

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div>
    <button @click="addCart()">Cart</button>
    <div class="Movieposter">
      <img
        v-for="movie in store.movies"
        :src="movie.poster"
        @click="openModal(movie.id)"
      />
    </div>
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
</template>

<style scoped>
.Movieposter {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  border-radius: 4px;
  border-color: rgb(202, 26, 26);
}

button {
  font-size: 20px;
  color: rgb(202, 26, 26);
  background-color: rgb(54, 52, 52);
  border-color: rgba(71, 70, 70, 0.76);
  border-width: 3px;
}

img {
  width: 250px;
  height: 400px;
  border-radius: 40px;
  border-width: 4px;
  border-style:dotted;
  border-color: rgb(202, 26, 26);
}
</style>
