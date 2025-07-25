<template>
  <ul class="list-group">
    <RecipeFormHeader></RecipeFormHeader>
    <RecipeFormBody :isEdit="isEdit"></RecipeFormBody>
  </ul>
</template>

<script setup>
import RecipeFormHeader from "./RecipeFormHeader.vue";
import RecipeFormBody from "./RecipeFormBody.vue";

defineProps({
  isEdit: { type: Boolean, default: false },
})
</script>