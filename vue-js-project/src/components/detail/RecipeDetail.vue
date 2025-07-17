<template>
  <div class="col-12 col-sm-8">
    <RecipeDescription></RecipeDescription>
    <RecipeDirections></RecipeDirections>
    <RecipeIngredients></RecipeIngredients>
  </div>
</template>

<script setup>
  import RecipeDescription from "./RecipeDescription.vue"
  import { onMounted } from "vue"
  import { useRoute } from "vue-router"
  import { useStore } from "vuex"
  import RecipeDirections from "./RecipeDirections.vue"
  import RecipeIngredients from "./RecipeIngredients.vue"

  const store = useStore()
  const route = useRoute()

  onMounted(async () => {
    await store.dispatch(
      "recipe/getRecipeDetail", route.params.id
    )
  })
</script>