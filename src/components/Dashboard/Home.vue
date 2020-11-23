<template>
  <v-app id="inspire" style="background:#F3F5F7;">
    <Header></Header>
    <v-main class="content-background">
      <router-view />
    </v-main>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      small
      color="primary"
      @click="toTop"
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    fab: false, 
  }),
  components: {
    Footer: Footer,
    Header: Header,
  },
  mounted() {
    this.$router.push({ name: "Dashboard" });
    // below for testing
    // this.$router.push({ name: "MyAccount" });
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
};
</script>