<template>
  <div>
    <v-form>
      <div class="text-center">
        <h3 class="mb-5 mt-4">
          <strong style="color:#292DC2;">SIGN UP</strong>
          <!--<strong style="color:orange;">IN</strong>-->
        </h3>
      </div>
      <v-text-field
        v-model="user.uid"
        prepend-icon="email"
        :rules="[v => !!v || 'username required']"
        placeholder="Username / Mobile"
        clearable
        required
        style="border-color:#FFF"
      ></v-text-field>
      <v-text-field
        v-model="user.pass"
        :rules="[v => !!v || 'password required']"
        prepend-icon="lock"
        placeholder="Password"
        clearable
        @click:append="() => (value = !value)"
        :type="value ? 'password' : 'text'"
        required
      ></v-text-field>
      <v-text-field
        v-model="user.confirm_pass"
        :rules="[v => !!v || 'confirm password required']"
        prepend-icon="lock"
        placeholder="Confirm Password"
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
        >SIGN UP</v-btn>
      </center>
    </v-form>
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
        confirm_pass: "",
      },
      value: String,
    };
  },
};
</script>