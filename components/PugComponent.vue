<template lang="pug">
    div
        ul
            li(v-for="icon in icons" :key="icon")
                img(:src="require(`~/assets/svg/${icon}` )" )

        div
            slot

        h2 {{marion}}
        
</template>

<script>
export default {
  data() {
    return {
      icons: ["fire-extinguisher.svg"],
      marion: "marion"
    };
  }
};
</script>
