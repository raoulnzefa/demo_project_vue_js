<template>
  <v-footer class="justify-center c-title" padless >
    <v-row justify="center" no-gutters>
      <v-col cols="12" flat tile class="text-center">
        <v-divider style="background:grey;"></v-divider>
      </v-col>
      <v-col cols="12" class="py-1 text-center">
        <div
          style="text-transform: none;font-size: 12px;"
        >FSM &copy; Copyright {{ new Date().getFullYear() }} . All Rights Reserved.</div>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {};
</script>
<style scoped>
.c-title {
  background: #34495e;
  /*background-image: linear-gradient(-90deg, #8edffd, #034c70);*/
  color: #fff;
}
</style>