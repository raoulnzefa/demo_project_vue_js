<template>
  <div>
    <v-container fluid>
      <v-card>
        <v-toolbar flat dense class="tc-title">
          <v-toolbar-title>Password</v-toolbar-title>
          <v-divider class="mx-4 tc-title-divider" inset vertical></v-divider>
          <v-toolbar-title style="font-size: 13px; font-weight: 300"
            >Choose a strong, unique password that’s at least 8 characters
            long</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <!--<v-icon color="warning">mdi-pencil</v-icon>-->
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col>
              <v-form>
                <v-text-field
                  v-model="old_pass"
                  :rules="[(v) => !!v || 'old password required']"
                  prepend-icon="lock"
                  placeholder="Previous Password"
                  clearable
                  @click:append="() => (value = !value)"
                  :type="value ? 'password' : 'text'"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="pass"
                  :rules="[(v) => !!v || 'new password required']"
                  prepend-icon="lock"
                  placeholder="New Password"
                  clearable
                  @click:append="() => (value = !value)"
                  :type="value ? 'password' : 'text'"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="confirm_pass"
                  :rules="[(v) => !!v || 'confirm password required']"
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
                    @click="checklogin"
                    color="primary"
                    >CHANGE PASSWORD</v-btn
                  >
                </center>
              </v-form>
            </v-col>
            <v-col>
              <v-alert
                icon="mdi-shield-lock-outline"
                prominent
                outlined
                type="error"
              >
                <span style="font-weight: 700; font-size: 16px"
                  >INSTRUCTIONS :</span
                >
                <ul>
                  <li>
                    Must contain at least 8 characters (12+ characters
                    recommended)
                  </li>
                  <li>Must contain at least one uppercase letter</li>
                  <li>Must contain at least one lowercase letter</li>
                  <li>Must contain at least one number</li>
                  <li>Must contain at least one special character</li>
                  <li>
                    May not contain first name, last name, email id, date of
                    birth, comapny name or commonly used passwords
                  </li>
                </ul>
              </v-alert>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <br />
      <v-card>
        <v-toolbar flat dense class="tc-title">
          <v-toolbar-title>Two-step verification</v-toolbar-title>
          <v-divider class="mx-4 tc-title-divider" inset vertical></v-divider>
          <v-toolbar-title style="font-size: 13px; font-weight: 300"
            >Help protect your account by enabling extra layers of
            security</v-toolbar-title
          >
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <div class="d-flex flex-row">
            <span style="font-weight: 700; font-size: 16px"
              >Text message verification
              <br />
              <span style="font-weight: 400; font-size: 14px"
                >Receive a six digit code by text message to enter along with
                your password.
              </span>
            </span>
            <v-spacer></v-spacer>
            <v-btn class="btn-title" @click="checklogin" color="primary"
              >ENABLE</v-btn
            >
          </div>
        </v-card-text>
        <hr />
        <v-card-text>
          <div class="d-flex flex-row">
            <span style="font-weight: 700; font-size: 16px"
              >Security question
              <br />
              <span style="font-weight: 400; font-size: 14px"
                >Confirm your identity with a question only you know answer to.
              </span>
            </span>
            <v-spacer></v-spacer>
            <v-btn class="btn-title" @click="checklogin" color="primary"
              >ENABLE</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      old_pass: "",
      pass: "",
      confirm_pass: "",
      value: String,
    };
  },
};
</script>
<style scoped>
.tc-title {
  background-image: linear-gradient(-90deg, #37a000, #449226);
  color: #fff;
  font-weight: 700;
  margin: 0px !important;
  padding: 0px !important;
}
.tc-title-divider {
  background-image: linear-gradient(-90deg, #ffffff, #ffffff);
  color: #fff;
}
.text-left {
  font-size: 14px;
  font-weight: bold;
}
.text {
  color: blue;
  font-weight: 600;
  font-size: 14px;
}
</style>