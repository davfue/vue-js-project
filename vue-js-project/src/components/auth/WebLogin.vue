<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5;">
    <div style="background-color: #ffffff; width: 400px; min-height: 100vh;" class="p-5 m-auto login-form">
      <div class="text-center">
        <img src="../../assets/images/Logo.png" alt="Logo" />
        <h2 class="mt-4">Log in to your account</h2>
        <p>Welcome back! Please enter your details.</p>
      </div>
      <form @submit.prevent="login">
        <div class="my-4">
          <BaseInput type="text" identity="email" placeholder="Your username" label="Email" v-model="loginData.email"></BaseInput>
        </div>
        <div class="my-4">
          <BaseInput type="password" identity="password" placeholder="Your Password" label="Password" v-model="loginData.password"></BaseInput>
        </div>
        <BaseButton class="login w-100 my-3">Log In</BaseButton>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Don’t have an account?<span style="color: #4c4ddc">
            <router-link to="/signup">
              <a class="text-decoration-none">Signup</a>
            </router-link>
            </span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
    import BaseInput from "@/components/ui/BaseInput.vue";
    import BaseButton from "@/components/ui/BaseButton.vue";
    import { reactive } from "vue";
    import { useStore } from "vuex";
    import { useRouter } from "vue-router";

    const store = useStore();
    const router = useRouter();

    const loginData = reactive({
      email: "",
      password: "",
      isLogin: true,
    });

    const login = async () => {
      await store.dispatch("auth/getLoginData", loginData);
      router.push("/");
    };
</script>