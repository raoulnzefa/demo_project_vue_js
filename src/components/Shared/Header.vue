<template>
  <div>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      dark
      dense
      color="blue darken-3"
    >
      <!--<v-app-bar-nav-icon @click.stop="toggleDrawer" /> -->
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">F S M</span>
      </v-toolbar-title>
      <v-menu
        v-model="store"
        :close-on-content-click="false"
        :nudge-width="150"
        offset-y
        transition="scroll-y-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-avatar>
              <v-icon>mdi-storefront-outline</v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-item-group color="primary">
              <router-link to="/shop" class="sidebar-link">
                <v-list-item dense>
                  <!--
                  <v-list-item-icon>
                    <v-icon color="warning">mdi-account-circle-outline</v-icon>
                  </v-list-item-icon>
                  -->
                  <v-list-item-content>
                    <v-list-item-title>All Products</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
              <router-link to="/shop" class="sidebar-link">
                <v-list-item dense>
                  <!--
                  <v-list-item-icon>
                    <v-icon color="secondary">mdi-account-key</v-icon>
                  </v-list-item-icon>
                  -->
                  <v-list-item-content>
                    <v-list-item-title>Vegitables</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
              <router-link to="/shop" class="sidebar-link">
                <v-list-item dense>
                  <!--
                <v-list-item-icon>
                  <v-icon color="secondary">mdi-location-exit</v-icon>
                </v-list-item-icon>
                -->
                  <v-list-item-content>
                    <v-list-item-title>Fruits</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
      <v-text-field
        dense
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer />
      <v-menu
        v-model="notification"
        :close-on-content-click="false"
        :nudge-width="150"
        offset-y
        transition="scroll-y-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-avatar>
              <v-icon>mdi-bell-outline</v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-item-group color="primary">
              <router-link to="/user-profile" class="sidebar-link">
                <v-list-item dense>
                  <v-list-item-content>
                    <v-list-item-title
                      >Potato Now availables Please check</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </router-link>
              <router-link to="/update-password" class="sidebar-link">
                <v-list-item dense>
                  <v-list-item-content>
                    <v-list-item-title
                      >Apples Now availables Please check</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </router-link>
              <v-list-item @click="closeMenuAndLogout()" dense>
                <v-list-item-content>
                  <v-list-item-title
                    >Graips Now availables Please check</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
      <!--
      <v-btn icon>
        <v-avatar>
          <v-icon>mdi-help</v-icon>
        </v-avatar>
      </v-btn>
      -->
      <router-link to="cart" class="sidebar-link">
        <v-btn icon>
          <v-avatar>
            <v-icon>mdi-cart-outline</v-icon>
          </v-avatar>
        </v-btn>
      </router-link>
      <div style="width: 10px"></div>
      <div class="text-center">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-y
          transition="scroll-y-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-avatar>
                <v-icon>mdi-account-circle-outline</v-icon>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list>
              <v-list-item dense>
                <v-list-item-content>
                  <v-list-item-title>
                    Welcome,
                    <br />
                    To Manage you accounts and shopping,
                    <br />
                    <router-link to="login" class="sidebar-link"
                      >Sign In/ Sign Up</router-link
                    >
                  </v-list-item-title>
                </v-list-item-content>
                <!--
                <v-list-item-avatar dense>
                  <v-avatar>
                    <v-icon>mdi-account-circle-outline</v-icon>
                  </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Hello, {{data.username}}</v-list-item-title>
                  <v-list-item-subtitle>{{uid}}</v-list-item-subtitle>
                </v-list-item-content>
                -->
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list shaped>
              <v-list-item-group color="primary">
                <router-link to="/my-account" class="sidebar-link">
                  <v-list-item dense>
                    <v-list-item-icon>
                      <v-icon color="warning"
                        >mdi-account-circle-outline</v-icon
                      >
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>User Profile</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </router-link>
                <router-link to="/security" class="sidebar-link">
                  <v-list-item dense>
                    <v-list-item-icon>
                      <v-icon color="secondary">mdi-account-key</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Change Password</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </router-link>
                <router-link to="/help-support" class="sidebar-link">
                  <v-list-item dense>
                    <v-list-item-icon>
                      <v-icon color="secondary">mdi-help</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Help / Support</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </router-link>
                <v-list-item @click="closeMenuAndLogout()" dense>
                  <v-list-item-icon>
                    <v-icon color="secondary">mdi-location-exit</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Logout</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <!--
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="ma-1"
                outlined
                small
                fab
                color="error"
                @click="closeMenuAndLogout()"
                title="logout"
              >
                <v-icon>mdi-location-exit</v-icon>
              </v-btn>
            </v-card-actions>
            -->
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data: () => ({
    initials: "",
    menu: false,
    store: false,
    notification: false,
    username: "",
    uid: "",
    data: {},
    profile_photo: "",
    logo_main: "http://www.vierp.in/logo/edu+camp-white-01.png",
  }),
  methods: {
    toggleDrawer() {
      this.$store.state.drawer = !this.$store.state.drawer;
    },
    closeMenuAndLogout() {
      this.menu = false;
      localStorage.clear();
      this.$router.push("/");
    },
    imageReplacement(uername) {
      //var names = this.uername.split('');
      //console.log("names "+names)
      this.initials = uername[0].charAt(0).toUpperCase();
      // window.alert(initials)
    },
  },
  mounted() {
    this.$store.commit("setquick_links", true);
    this.awspath = localStorage.getItem("awspath");
    this.uid = localStorage.getItem("application_id");
    this.profile_photo = localStorage.getItem("profilephoto");
    // consoles(this.profile_photo);
    // axios.get("home/getusername")
    // .then(res =>{
    //   //window.console.log("res"+res.data)
    //   if(res.data.msg=="200"){
    //     this.data = res.data
    //     this.uername=this.data.username
    //     // window.alert(this.uername)
    //     this.profile_image_name=this.data.profile_image_name
    //     this.profile_image_path=this.data.profile_image_path
    //     this.imageReplacement(this.uername)
    //   }
    //   else{
    //   }
    // })
    // .catch(error => {
    //     window.console.log(error)
    // })
  },
};
</script>
<style scoped>
.sidebar-link {
  text-decoration: none;
}
.sidebar-link-item:hover {
  background-color: rgb(181, 186, 190) !important;
}
.c-title {
  background-image: linear-gradient(-90deg, #8edffd, #034c70);
  color: #fff;
}
.header-style {
  color: #000;
  font-weight: 700;
  background-color: #292dc2;
}
</style>