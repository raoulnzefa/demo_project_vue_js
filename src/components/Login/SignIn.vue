<template>
  <div>
    <v-form>
      <div class="text-center">
        <h3 class="mb-5 mt-4">
          <strong style="color:#292DC2;">SIGN IN</strong>
          <!--<strong style="color:orange;">IN</strong>-->
        </h3>
      </div>
      <v-text-field
        v-model="user.uid"
        prepend-icon="email"
        :rules="[v => !!v || 'username required']"
        placeholder="Enter Mobile Number"
        clearable
        required
        style="border-color:#FFF"
      ></v-text-field>
      <v-text-field
        v-model="user.pass"
        :rules="[v => !!v || 'password required']"
        prepend-icon="lock"
        placeholder="Enter Password"
        clearable
        @click:append="() => (value = !value)"
        :type="value ? 'password' : 'text'"
        required
      ></v-text-field>
      <center>
        <v-btn
          class="mr-4 btn-title mb-5 mt-4"
          rounded
          block
          @click="checklogin"
          color="primary"
        >SIGN IN</v-btn>
      </center>
    </v-form>

    <v-row>
      <v-col cols="12" sm="12" md="12">
        <div id="usernameforgtpassword">
          <router-link
            to="/forgot-password"
            class="float-right"
            style="color:#292DC2; text-decoration: none;"
          >Forgot Password?</router-link>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("test");
  },
  data() {
    return {
      user: {
        uid: "",
        pass: "",
      },
      value: String,
    };
  },
};
</script>