<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5">
    <div style="background-color: #ffffff" class="p-5 m-auto signup-form">
      <div class="text-center">
        <img src="../../assets/images/Logo.png" alt="Logo" />
        <h2 class="mt-4">Create your account</h2>
        <p>Enter your details to use all the app features.</p>
      </div>
      <form class="mt-3" @submit.prevent="register">
        <div class="row">
          <div class="col-md-6">
            <BaseInput type="text" identity="firstname" placeholder="Ex: Jack" label="Firstname" v-model="signupData.firstname"></BaseInput>
          </div>
          <div class="col-md-6">
            <BaseInput type="text" identity="lastname" placeholder="Ex: Daniel" label="Lastname" v-model="signupData.lastname"></BaseInput>
          </div>
        </div>
        <div class="my-4">
          <BaseInput type="text" identity="username" placeholder="Your username" label="Username" v-model="signupData.username"></BaseInput>
        </div>
        <div class="my-4">
          <BaseInput type="email" identity="email" placeholder="Your email address" label="Email" v-model="signupData.email"></BaseInput>
        </div>
        <div class="my-4">
          <BaseInput type="password" identity="password" placeholder="Your password" label="Password" v-model="signupData.password" @keyInput="passwordCheck"></BaseInput>
          <p class="text-danger mt-1 fw-medium" style="font-size: 11px" :style="{ display: passwordStatusDisplay }">
            The password field must be at least 8 characters
          </p>
        </div>
        <div class="my-4">
          <BaseInput type="password" identity="confirmationPassword" placeholder="Same with password" label="Confirmation Password" v-model="signupData.confirmationPassword" @keyInput="confirmationPasswordCheck"></BaseInput>
          <p class="text-danger mt-1 fw-medium" style="font-size: 11px" :style="{ display: confirmPasswordDoesNotMatch }">
            The password confirmation does not match
          </p>
          <p class="text-success mt-1 fw-medium" style="font-size: 11px" :style="{ display: confirmPasswordMatch }">
            The password confirmation does match
          </p>
        </div>
        <div class="my-4">
          <BaseInput type="file" identity="recipeImage" label="Profile Photo" isImage="true" @input="checkImage">
            <div class="border p-1 mt-2 rounded-circle">
              <img :src="signupData.imageLink" class="rounded-circle" width="140" height="150" style="object-fit: cover">
            </div>
            <div class="text-center" style="transform: translateY(-24px)">
              <i class="fa-solid fa-camera fs-5 p-2 rounded-circle bg-white"></i>
            </div>
          </BaseInput>
        </div>
        <BaseButton class="login w-100 my-3">Register</BaseButton>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Already have account?
            <span style="color: #4c4ddc">
              <router-link to="/login">
                <a class="text-decoration-none"> Login</a>
              </router-link>
            </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import BaseInput from "@/components/ui/BaseInput.vue";
  import BaseButton from "@/components/ui/BaseButton.vue";
  import { reactive, ref } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";

  const store = useStore();
  const router = useRouter();
  
  const signupData = reactive({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmationPassword: "",
    isLogin: false,
    imageLink: "",
  })

  const passwordStatusDisplay= ref("none")

  const passwordCheck = () => {
    if( signupData.password.length < 8) {
      passwordStatusDisplay.value = "block"
    } else {
      passwordStatusDisplay.value = "none"
    }
  }

  const confirmPasswordDoesNotMatch = ref("none");
  const confirmPasswordMatch = ref("none");

  const confirmationPasswordCheck = () => {
    if (signupData.confirmationPassword === "") {
      confirmPasswordDoesNotMatch.value = "none";
      confirmPasswordMatch.value = "none";
      return;
    }

    if (signupData.password !== signupData.confirmationPassword) {
      confirmPasswordDoesNotMatch.value = "block";
      confirmPasswordMatch.value = "none";
      return;
    } 

    confirmPasswordDoesNotMatch.value = "none";
    confirmPasswordMatch.value = "block";
  };

  const checkImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener("load", () => {
      signupData.imageLink = reader.result;
    });
  };

    const register = async() => {
    if (
      signupData.password !== signupData.confirmationPassword ||
      signupData.password.length < 8
    ) {
      signupData.confirmationPassword = "";
      signupData.password = "";
      confirmPasswordDoesNotMatch.value = "none";
      confirmPasswordMatch.value = "none";
    } else {
      console.log("Register Data: ", signupData);
      
      await store.dispatch("auth/getRegisterData", signupData);
      router.push("/");
    }
  }
</script>