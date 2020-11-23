<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="5" xs="12" lg="4">
          <v-carousel
            cycle
            height="400"
            show-arrows-on-hover
            hide-delimiters
            delimiter-icon="mdi-minus"
            interval="3000"
          >
            <v-carousel-item v-for="i in 5" :key="i">
              <v-sheet color="#F3F5F7" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    </v-img>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-divider class="mx-4 tc-title-divider" inset vertical></v-divider>
        <v-col cols="12" sm="12" md="6" xs="12" lg="7">
          <h2>
            <label style="color: #9fd0e3"> Name Of Product </label>
          </h2>
          <h4>
            <label style="font-weight: 300">
              Name Of Product Detailed Description / Status of Product (Cutting
              Stage, Ready To move or transport, etc.)
            </label>
          </h4>
          <div class="d-flex flex-row">
            <span class="caption d-flex flex-row" style="color: #fca489">
              ({{ rating }})
            </span>
            <v-rating
              class="d-flex flex-row"
              v-model="rating"
              color="#FCA489"
              dense
              half-increments
              size="18"
            ></v-rating>
          </div>
          <span style="font-size: 12px"
            >NOTE : The above rating given by FSM Agriculture Officer. This
            indicates the quality of the product.</span
          >
          <div style="padding-top: 20px"></div>
          <div class="d-flex flex-row">
            <span style="font-size: 20px">
              <span style="font-size: 14px"> MRP:</span>
              <span style="color: red"><s> &#8377; 2000</s></span>
              <span style="padding-left: 10px"></span>
              <span style="font-size: 14px"> Price:</span>
              <span style="color: green"> &#8377; 1000</span>
              <span style="padding-left: 10px"></span>
              <span style="font-size: 14px">
                (Your Saving: &#8377; 1000
                <span style="color: red">(50%)</span>)
              </span>
            </span>
          </div>
          <span style="font-size: 12px">
            <b><span style="color: red">*</span>Delivery Charges Extra</b>
          </span>
          <div style="padding-top: 20px"></div>
          <div>Available Quantity : <b>20Kg</b></div>
          <div style="padding-top: 20px"></div>
          <div class="d-flex flex-row">
            <v-text-field
              type="number"
              v-model="salutation"
              color="blue darken-2"
              label="Select Quantity"
              required
              dense
              suffix="Kg"
            ></v-text-field>
            <div style="padding-right: 20px"></div>
            <v-btn tile color="primary">
              <v-icon left color="white"> mdi-cart-outline </v-icon>
              Add To Cart
            </v-btn>
          </div>
          Your Order Cost : <span style="color: green">&#8377; 0 </span>
          <div style="padding-top: 20px"></div>
          <div style="font-size: 12px">
            <span> Product Details Information </span>
            <ul>
              <li>This is verified product. Good Quality.</li>
              <li>This is verified product. Good Quality.</li>
              <li>This is verified product. Good Quality.</li>
              <li>This is verified product. Good Quality.</li>
            </ul>
          </div>
          <div style="padding-top: 20px"></div>
          <v-alert outlined color="#9FAAE3">
            <span style="color: #9faae3"><b>Farmer's Information : </b></span>
            <br />
            <span style="color: #9faae3">Name : ABC DEF GHI</span>
            <br />
            <span style="color: #9faae3"
              >Address : Taluka, District, City, State, Country.</span
            >
            <br />
            <span></span>
          </v-alert>
        </v-col>
      </v-row>
      <v-divider class="mx-4 tc-title-divider" ></v-divider>
      <div>
        <v-row style="margin: 0px">
          <v-col>
            <template>
              <div>
                <v-toolbar dense style="background: #fff" elevation="1">
                  <v-toolbar-title style="font-size: 16px; color: blue">
                    Other Similar Products
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                  <router-link
                    class="sidebar-link"
                    to="shop"
                    style="text-decoration: none"
                  >
                    <v-toolbar-title style="font-size: 14px; color: blue">
                      View all
                    </v-toolbar-title>
                  </router-link>
                </v-toolbar>
                <v-sheet class="mx-auto" elevation="1">
                  <v-slide-group show-arrows="false">
                    <v-slide-item v-for="n in 15" :key="n">
                      <router-link
                        to="product-details"
                        style="text-decoration: none"
                      >
                        <v-card class="ma-4" max-width="210">
                          <v-img
                            class="white--text align-end"
                            height="200px"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                          >
                          </v-img>
                          <v-card-title class="pb-0" style="color: #7c4dff">
                            Name Of Product
                          </v-card-title>
                          <v-card-text class="text--primary">
                            <div style="color: #ff8a80; font-weight: 700">
                              &#8377;10000
                            </div>
                            <div style="font-size: 12px">
                              Delivery on
                              <span style="font-weight: bold">
                                Tommarow, 11 Sept.
                              </span>
                            </div>
                          </v-card-text>
                        </v-card>
                      </router-link>
                    </v-slide-item>
                  </v-slide-group>
                </v-sheet>
              </div>
            </template>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rating: 4.3,
    };
  },
};
</script>
<style scoped>
.v-btn .v-btn__content .v-icon {
  color: black;
}
</style>