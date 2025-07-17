import { createStore } from "vuex";
import recipe from "@/store/recipe.js";
import auth from "@/store/auth.js";

export const store = createStore({
  modules: {
    recipe,
    auth
  },
})