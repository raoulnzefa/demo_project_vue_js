<template>
  <div>
    <v-container fluid>
      <v-card>
        <v-toolbar flat dense class="tc-title">
          <v-toolbar-title>My Profile</v-toolbar-title>
          <v-divider class="mx-4 tc-title-divider" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-icon color="white" title="Edit Profile">mdi-pencil</v-icon>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <div id="profile_details">
                <v-alert color="#B5FDFD" style="color: blue">
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-img
                        style="
                          width: 200px;
                          height: 100px;
                          padding: 0px;
                          margin: 0px;
                        "
                        contain
                        src="https://vierp-test.s3.ap-south-1.amazonaws.com/original.jpg"
                      />
                    </v-col>
                    <v-col>
                      <label><b>Mr. Pratik Shitre</b></label>
                      <br />
                      <label>17th Jan 1992</label>
                      <br />
                      <label>pshitre505@gmail.com</label>
                      <br />
                      <label>8600616980</label>
                    </v-col>
                  </v-row>
                </v-alert>
              </div>
            </v-col>
          </v-row>
          <div id="profile_edit">
            <v-alert outlined color="red">
              <label>Edit Profile</label>
              <v-row>
                <v-col cols="12" md="2">
                  <v-text-field
                    v-model="salutation"
                    color="purple darken-2"
                    label="Salutation"
                    required
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="5">
                  <v-text-field
                    v-model="first_name"
                    color="purple darken-2"
                    label="First Name"
                    required
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="5">
                  <v-text-field
                    v-model="last_name"
                    color="purple darken-2"
                    label="Last Name"
                    required
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="email_id"
                    color="purple darken-2"
                    label="Email Id"
                    required
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="mobile_no"
                    color="purple darken-2"
                    label="Mobile No"
                    required
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    type="date"
                    v-model="dob"
                    color="purple darken-2"
                    label="Date Of Birth"
                    required
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-file-input
                    accept="image/*"
                    label="Profile Photo"
                    dense
                  ></v-file-input>
                </v-col>
              </v-row>
              <center>
                <v-btn
                  class="btn-title"
                  rounded
                  @click="checklogin"
                  color="primary"
                  >Update</v-btn
                >
              </center>
            </v-alert>
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
      salutation: "",
      first_name: "",
      last_name: "",
      mobile_no: "",
      dob: "",
      email_id: "",
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