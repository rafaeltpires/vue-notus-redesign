<template>
  <div>
<!--    <navbar />-->
    <main>
      <section class="relative w-full h-full py-40 min-h-screen">
        <div
          class="absolute top-0 w-full h-full bg-green-700 bg-no-repeat bg-full"
          :style="`background-image: url('${registerBg}');`"
        ></div>
        <router-view />
<!--        <footer-small absolute />-->
      </section>
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterSmall from "@/components/Footers/FooterSmall.vue";

const registerBg = "https://picsum.photos/1920/1080";

export default {
  data() {
    return {
      registerBg,
    };
  }
};
</script>
