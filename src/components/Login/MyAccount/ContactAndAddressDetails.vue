<template>
  <div>
    <v-container fluid>
      <v-card>
        <v-toolbar flat dense class="tc-title">
          <v-toolbar-title>Contact Info</v-toolbar-title>
          <v-divider class="mx-4 tc-title-divider" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-icon color="white" title="Edit Contact Information"
            >mdi-pencil</v-icon
          >
          <!--<v-icon color="warning">mdi-pencil</v-icon>-->
        </v-toolbar>
        <v-card-text>
          <div id="contact_info">
            <v-alert outlined color="blue">
              <v-row>
                <v-col cols="12" sm="3">
                  <label><b>Email Id : </b></label>
                  <br />
                  <label>pshitre505@gmail.com</label>
                </v-col>
                <v-col cols="12" sm="3">
                  <label><b>Alt. Email Id : </b></label>
                  <br />
                  <label>pratiks.virgo@gmail.com</label>
                </v-col>
                <v-col cols="12" sm="3">
                  <label><b>Contact No. : </b></label>
                  <br />
                  <label>8600616980</label>
                </v-col>
                <v-col cols="12" sm="3">
                  <label><b>Alt. Contact No. : </b></label>
                  <br />
                  <label>8888861505</label>
                </v-col>
              </v-row>
            </v-alert>
          </div>
          <div id="contact_edit">
            <v-alert outlined color="red">
              <label>Edit Contact Information</label>
              <v-form>
                <v-row>
                  <v-col dense>
                    <v-text-field
                      v-model="email_id"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="Email Id"
                      required
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_email_id"
                      color="purple darken-2"
                      label="Alternate Email Id"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col dense>
                    <v-text-field
                      v-model="mobile_no"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="Mobile Number"
                      required
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_mobile_no"
                      color="purple darken-2"
                      label="Alternate Mobile Number"
                      dense
                    ></v-text-field>
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
              </v-form>
            </v-alert>
          </div>
        </v-card-text>
      </v-card>
      <br />
      <v-card>
        <v-toolbar flat dense class="tc-title">
          <v-toolbar-title>Address Info</v-toolbar-title>
          <v-divider class="mx-4 tc-title-divider" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-icon color="white" title="Add New Address Information"
            >mdi-plus-box-outline</v-icon
          >
        </v-toolbar>
        <v-card-text>
          <div id="address_list">
            <v-row>
              <v-col cols="12" lg="4">
                <v-card color="#385F73" dark>
                  <v-card-title class="headline">
                    Pratik P Shitre
                  </v-card-title>
                  <v-card-subtitle
                    >Sr. No. 116, Paramanavnath Park Hsg. Soc., Shivtirth Nagar,
                    Paud Road, Kothrud, Pune, Maharashtra, India -
                    411038.</v-card-subtitle
                  >
                  <v-card-actions>
                    <v-btn text> EDIT </v-btn>
                    <v-btn text> DELETE </v-btn>
                    <v-btn text> Set Default </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
          <div id="address_add">
            <v-alert outlined color="red">
              <label>Add Address Information</label>
              <v-form>
                <v-row>
                  <v-col dense>
                    <v-text-field
                      v-model="email_id"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="Full Name"
                      required
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_email_id"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="Flat, House no., Building, Company, Apartment"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col dense>
                    <v-text-field
                      v-model="mobile_no"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="Area, Colony, Street"
                      required
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_mobile_no"
                      color="purple darken-2"
                      label="Landmark"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_mobile_no"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="City"
                      dense
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_mobile_no"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="State"
                      dense
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_mobile_no"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="Country"
                      required
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_mobile_no"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="Pin Code"
                      required
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <center>
                  <v-btn
                    class="btn-title"
                    rounded
                    @click="checklogin"
                    color="primary"
                    >Add</v-btn
                  >
                </center>
              </v-form>
            </v-alert>
          </div>
          <div id="address_edit">
            <v-alert outlined color="red">
              <label>Edit Address Information</label>
              <v-form>
                <v-row>
                  <v-col dense>
                    <v-text-field
                      v-model="email_id"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="Full Name"
                      required
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_email_id"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="Flat, House no., Building, Company, Apartment"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col dense>
                    <v-text-field
                      v-model="mobile_no"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="Area, Colony, Street"
                      required
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_mobile_no"
                      color="purple darken-2"
                      label="Landmark"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_mobile_no"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="City"
                      dense
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_mobile_no"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="State"
                      dense
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_mobile_no"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="Country"
                      required
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col dense>
                    <v-text-field
                      v-model="alt_mobile_no"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="Pin Code"
                      required
                      dense
                    ></v-text-field>
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
              </v-form>
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
      mobile_no: "",
      email_id: "",
      alt_mobile_no: "",
      alt_email_id: "",
      rules: {
        name: [(val) => (val || "").length > 0 || "This field is required"],
      },
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