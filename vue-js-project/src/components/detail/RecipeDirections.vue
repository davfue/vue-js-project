<template>
  <div class="my-3">
    <div class="card">
      <div class="card-header">
        <p class="fs-4 mhy-0 fw-semibold">Directions</p>
      </div>
      <div class="card-body">
        <div v-for="(direction, index) in recipeDetail.directions" :key="index">
          <p class="my-2 fs-5 fw-semibold">Step {{ index + 1}}</p>
          <p class="my-2">{{ direction }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue"
  import { useStore } from "vuex"

  const store = useStore ()

  const recipeDetail = computed(() => {
    return store.state.recipe.recipeDetail
  })
</script>