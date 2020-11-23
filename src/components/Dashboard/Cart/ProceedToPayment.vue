<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" sm="12" xs="12">
          <v-card color="#385F73" dark>
            <v-row>
              <v-col cols="12" md="10" sm="12" xs="12">
                <v-card-title class="headline"> Pratik Shitre </v-card-title>
                <v-card-subtitle>
                  Contact No. : 8600616980
                  <br />
                  Email Id : pshitre505@gmail.com
                </v-card-subtitle>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <v-card-actions
                  class="justify-end"
                  style="width: 100%; height: 100%"
                >
                  <v-btn text> Edit </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
          <br />
          <v-card color="#385F73" dark>
            <v-row>
              <v-col cols="12" md="10" sm="12" xs="12">
                <v-card-title class="headline"> Delivery Address </v-card-title>
                <v-card-subtitle>
                  Pratik Shitre
                  <br />
                  Sr. No. 116, Paramanavnath Park Hsg. Soc., Shivtirtha Nagar,
                  Paud Road, Kothrud,
                  <br />
                  Pune, Maharashtra, India - 411038.
                </v-card-subtitle>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <v-card-actions
                  class="justify-end"
                  style="width: 100%; height: 100%"
                >
                  <v-btn text> Edit </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
          <br />
          <v-card color="#385F73" dark>
            <v-row>
              <v-col cols="12" md="10" sm="12" xs="12">
                <v-card-title class="headline"> Price Details </v-card-title>
                <v-divider></v-divider>
                <v-card-subtitle>
                  <div>
                    Total Payable Amount :
                    <div class="justify-space-between"></div>
                    <span style="font-size: 20px; ">&#8377; 2000</span>
                  </div>
                </v-card-subtitle>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <v-card-actions
                  class="justify-end"
                  style="width: 100%; height: 100%"
                >
                  <v-btn text> Cancel </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
          <div style="padding-top: 30px"></div>
          <center>
            <v-btn color="warning"> Continue To Payment </v-btn>
          </center>
        </v-col>
        <v-col cols="12" md="4" sm="12" xs="12">  </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>