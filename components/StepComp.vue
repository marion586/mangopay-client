<template lang="pug">
  .profile()
    .steps
      el-steps(:active="currentStep" simple)
        el-step(title="information personnelle"  icon="el-icon-edit")
        el-step(title="info Bancaire" icon="el-icon-upload")
        el-step(title="proffessionnele" icon="''")
    transition(name="el-fade-in" mode="out-in")
      .content.container.size-l(v-if="currentStep === 0" key="step-0") Description information personnelle
      .content.container.size-l(v-if="currentStep === 1" key="step-1") Description info Bancaire
      .content.container.size-l(v-if="currentStep === 2" key="step-2") Description proffessionnele
    el-button(style="margin-top: 12px;" @click="next") Submit
    
</template>

<script>
export default {
  data() {
    return {
      currentStep: 0
    };
  },
  methods: {
    next() {
      if (this.currentStep++ > 2) this.currentStep = 0;
    }
  }
};
</script>

<style lang="scss" scoped></style>
