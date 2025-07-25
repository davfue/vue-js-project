<template>
  <main>
    <div class="container-md my-5 py-5">
      <RecipeForm v-if="detailData && !isLoading" :isEdit="true">
      </RecipeForm>
    </div>
  </main>
</template>

<script setup>
  import RecipeForm from "@/components/recipeForm/RecipeForm.vue"
  import { onMounted, ref } from "vue";
  import { useStore } from "vuex";
  import { useRoute }from "vue-router";

  const store = useStore();
  const route = useRoute();

  const detailData = (ref());
  const isLoading = (ref(false));

  onMounted(async () => {
    try {
      isLoading.value = true;
      await store.dispatch("recipe/getRecipeDetail", route.params.id);
      detailData.value = store.state.recipe.recipeDetail;
      
      isLoading.value = false;
    } catch (err) {
        console.log(err)
    }
  });
</script>