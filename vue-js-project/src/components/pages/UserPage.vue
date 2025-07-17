<template>
  <div class="container-md my-5 py-5">
    <div class="row">
      <UserMenu @changeComponent="$router.push($event)"></UserMenu>
      <div class="col-lg-9">
        <component :is="component[getRoute]"></component>
      </div>
    </div>
  </div>
</template>

<script setup>
import UserMenu from "@/components/user/UserMenu.vue";
import FavoriteRecipe from "@/components/user/FavoriteRecipe.vue";
import PersonalInfo from "@/components/user/PersonalInfo.vue";
import UserRecipe from "@/components/user/UserRecipe.vue";

import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const component = {
  "personal-info": PersonalInfo,
  "favorite-recipes": FavoriteRecipe,
  "user-recipe": UserRecipe
}

const getRoute = computed(() => {
  return route.params.component
})
</script>