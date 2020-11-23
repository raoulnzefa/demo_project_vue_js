<template>
  <div>
    <v-row>
      <v-col cols="12" md="2" sm="12" xs="12">
        <br /><br /><br />
        <center>Filters List</center>
      </v-col>
      <v-divider class="tc-title-divider" inset vertical></v-divider>
      <v-col>
        <v-row>
          <v-col cols="12" md="3" sm="4" xs="12" v-for="n in 25" :key="n">
            <router-link to="product-details" style="text-decoration: none">
              <v-card class="ma-4" max-width="210">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                </v-img>
                <v-card-title class="pb-0" style="color: #7c4dff"
                  >Name Of Product</v-card-title
                >
                <v-card-text class="text--primary">
                  <div style="color: #ff8a80; font-weight: 700">
                    &#8377;10000
                  </div>
                  <div style="font-size: 12px">
                    Delivery on
                    <span style="font-weight: bold">Tommarow, 11 Sept.</span>
                  </div>
                </v-card-text>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {};
</script>