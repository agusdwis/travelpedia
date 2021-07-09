<template>
  <div class="h-screen p-5 flex flex-col">
    <div class="w-full h-3/5 md:h-2/3 flex justify-center items-center">
      <div class="w-full sm:max-w-sm md:max-w-lg animate-drop-slow">
        <ErrorImage />
      </div>
    </div>

    <div class="w-full flex-grow flex flex-col items-center animate-drop">
      <p class="title text-xl font-bold mb-3">Whoops!! Lost in places?</p>
      <p class="text-sm font-extralight">
        The page you're looking isn't found :(
      </p>
      <p class="text-sm font-extralight">We suggest you back to home</p>
      <NuxtLink to="/">
        <button class="button mt-7 p-3 w-32">
          Back to Home
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import ErrorImage from "@/assets/svg/404error.svg?inline";

export default {
  components: {
    ErrorImage
  },
  props: ["error"],
  layout: "error"
};
</script>
