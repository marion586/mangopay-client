<template lang="pug">
    div
        header
            nav-comp
                ul
                    li marion
            
        main
            nuxt
                //- Nuxt will place the page content here
        footer
            //- here comes your footer content
</template>

<script>
import NavComp from "@/components/Nav.vue";

export default {
  components: {
    NavComp
  }
};
</script>

<style lang="scss" scoped></style>
