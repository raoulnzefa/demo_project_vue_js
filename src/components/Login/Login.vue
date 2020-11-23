<template>
  <v-app>
    <v-row height="100%" class="img">
      <v-col cols="8"></v-col>
      <v-col cols="4">
        <div
          class="fill-height"
          fluid
          style="background-color:transparent; border:0px solid transprent;"
        >
          <v-row height="100%" align="center" justify="center">
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <v-card>
                <v-tabs fixed-tabs v-model="tabs">
                  <v-tab style="background-color:transparent !important; ">Sign In</v-tab>
                  <v-tab style="background-color:transparent !important; ">Sign Up</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tabs">
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <SignIn></SignIn>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <SignUp></SignUp>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <!--<Footer></Footer>-->
  </v-app>
</template>

<script>
// import Footer from "../Login/LoginFooter";
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp";
export default {
  components: {
    // Footer: Footer,
    SignIn: SignIn,
    SignUp: SignUp,
  },
  data() {
    return {
      tabs: null,
    };
  },
};
</script>
<style scoped>
.test {
  background-color: #6247aa;
}
.btn-theme {
  color: #000;
  font-weight: 700;
  background-color: #d8dede;
  background-image: linear-gradient(315deg, #d8dede 0%, #e5bdf6 74%);
}
.img {
  background-image: url("https://vierp-test.s3.ap-south-1.amazonaws.com/img/nature.jpg");
  background-color: red;
  background-size: cover;
}
</style>
