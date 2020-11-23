<template>
  <div>
    <template>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </template>
    <v-row style="background: #898989">
      <v-col></v-col>
      <v-col cols="9">
        <center>
          <v-row>
            <v-col cols="4">
              <v-row>
                <v-col cols="3">
                  <v-icon
                    style="
                      border-radius: 50%;
                      border: 1px solid #34495e;
                      padding: 10px;
                      color: #ffffff;
                      font-weight: 900;
                      background: #34495e;
                    "
                    >mdi-truck-outline</v-icon
                  >
                </v-col>
                <v-col cols="9">
                  <span
                    style="
                      font-weight: 500;
                      font-size: 16px;
                      float: left;
                      color: #ffffff;
                    "
                    >Free Shipping</span
                  >
                  <br />
                  <span
                    style="
                      font-weight: 300;
                      font-size: 12px;
                      float: left;
                      color: #e2e2e2;
                    "
                  >
                    Free Delivery over
                    <span style="color: #ffffff; font-weight: 700"
                      >&#8377;10000</span
                    >
                  </span>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row>
                <v-col cols="3">
                  <v-icon
                    style="
                      border-radius: 50%;
                      border: 1px solid #34495e;
                      padding: 10px;
                      color: #ffffff;
                      font-weight: 900;
                      background: #34495e;
                    "
                    >mdi-police-badge-outline</v-icon
                  >
                </v-col>
                <v-col cols="9">
                  <span
                    style="
                      font-weight: 500;
                      font-size: 16px;
                      float: left;
                      color: #ffffff;
                    "
                    >Secure Shopping</span
                  >
                  <br />
                  <span
                    style="
                      font-weight: 300;
                      font-size: 12px;
                      float: left;
                      color: #e2e2e2;
                    "
                    >Best security features</span
                  >
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row>
                <v-col cols="3">
                  <v-icon
                    style="
                      border-radius: 50%;
                      border: 1px solid #34495e;
                      padding: 10px;
                      color: #ffffff;
                      font-weight: 900;
                      background: #34495e;
                    "
                    >mdi-dump-truck</v-icon
                  >
                </v-col>
                <v-col cols="9">
                  <span
                    style="
                      font-weight: 500;
                      font-size: 16px;
                      float: left;
                      color: #ffffff;
                    "
                    >Free Shipping</span
                  >
                  <br />
                  <span
                    style="
                      font-weight: 300;
                      font-size: 12px;
                      float: left;
                      color: #e2e2e2;
                    "
                    >Free Delivery over &#8377; 10000</span
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </center>
      </v-col>
      <v-col></v-col>
    </v-row>
    <div>
      <v-row style="margin: 0px">
        <v-col>
          <template>
            <div>
              <v-toolbar dense style="background: #fff" elevation="1">
                <v-toolbar-title style="font-size: 16px; color: blue"
                  >Vegetables</v-toolbar-title
                >
                <v-spacer></v-spacer>
                <router-link
                  class="sidebar-link"
                  to="shop"
                  style="text-decoration: none"
                >
                  <v-toolbar-title style="font-size: 14px; color: blue"
                    >View all</v-toolbar-title
                  >
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
                          <!--<v-card-title>Top 10 Australian beaches</v-card-title>-->
                        </v-img>
                        <v-card-title class="pb-0" style="color: #7c4dff"
                          >Name Of Product</v-card-title
                        >
                        <!-- <v-card-subtitle class="pb-0" style="color:#7C4DFF">Name Of Product</v-card-subtitle>-->
                        <v-card-text class="text--primary">
                          <div style="color: #ff8a80; font-weight: 700">
                            &#8377;10000
                          </div>
                          <div style="font-size: 12px">
                            Delivery on
                            <span style="font-weight: bold"
                              >Tommarow, 11 Sept.</span
                            >
                          </div>
                        </v-card-text>
                        <!--
                      <v-card-actions>
                        <v-btn color="orange" text>Share</v-btn>
                        <v-btn color="orange" text>Explore</v-btn>
                      </v-card-actions>
                      -->
                      </v-card>
                    </router-link>
                    <!--
                    <v-card
                      :color="active ? 'primary' : 'grey lighten-1'"
                      class="ma-4"
                      height="250"
                      width="212"
                      rounded="20"
                      @click="toggle"
                    >
                      <v-row class="fill-height" >
                        <img
                          src="https://thumbor.thedailymeal.com/5g1xxbo05RY_arzq5eNxq2VAGLs=/870x565/https://www.thedailymeal.com/sites/default/files/recipe/2020/istock_000010134416xsmall.jpg"
                          height="200"
                          width="212"
                        />
                        <v-col>
                        </v-col>
                      </v-row>
                    </v-card>
                    -->
                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
            </div>
          </template>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-row style="margin: 0px">
        <v-col>
          <template>
            <div>
              <v-toolbar dense style="background: #fff" elevation="1">
                <v-toolbar-title style="font-size: 16px; color: blue"
                  >Fruits</v-toolbar-title
                >
                <v-spacer></v-spacer>
                <router-link
                  class="sidebar-link"
                  to="shop"
                  style="text-decoration: none"
                >
                  <v-toolbar-title style="font-size: 14px; color: blue"
                    >View all</v-toolbar-title
                  >
                </router-link>
              </v-toolbar>
              <v-sheet class="mx-auto" elevation="1">
                <v-slide-group show-arrows="false">
                  <v-slide-item v-for="n in 25" :key="n">
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
                        <v-card-title class="pb-0" style="color: #7c4dff"
                          >Name Of Product</v-card-title
                        >
                        <v-card-text class="text--primary">
                          <div style="color: #ff8a80; font-weight: 700">
                            &#8377;10000
                          </div>
                          <div style="font-size: 12px">
                            Delivery on
                            <span style="font-weight: bold"
                              >Tommarow, 11 Sept.</span
                            >
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
  </div>
</template>
<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],

    model: null,
    multiple: false,
    mandatory: false,
    showArrows: true,
    prevIcon: false,
    nextIcon: false,
    centerActive: false,
  }),
};
</script>