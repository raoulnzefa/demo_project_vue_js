<template>
  <div>
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" app style="background:#F3F5F7;">
      <v-list dense shaped>
        <template v-for="item in items">
          <v-list-group
            :key="item.name"
            append-icon
          >
            <template v-slot:activator>
              <router-link class="sidebar-link" :to="{ name: item.name}">
                <v-list-item  class="shaped">
                  <v-list-item-content>
                    <v-list-item-title style="color:blue;">{{ item.text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </template>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <router-view />
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    items: [
      { text: "My Profile", name: "MyProfile" },
      { text: "Contacts And Addresses", name: "ContactDetails" },
      { text: "Your Order Details", name: "OrderDetails" },
      { text: "All Payments & Bills", name: "PaymentsAndBills" },
      { text: "Profile Settings", name: "ProfileSettings" },
      { text: "Password & Security", name: "PasswordAndSecurity" },
      { text: "Notifications Settings", name: "NotificationSettings" },
      { text: "Settings", name: "Settings" },
      // {
      //   icon: "mdi-chevron-up",
      //   "icon-alt": "mdi-chevron-down",
      //   text: "Labels",
      //   model: true,
      //   children: [{ icon: "mdi-plus", text: "Create label" }],
      // },
      // {
      //   icon: "mdi-chevron-up",
      //   "icon-alt": "mdi-chevron-down",
      //   text: "More",
      //   model: false,
      //   children: [
      //     { text: "Import" },
      //     { text: "Export" },
      //     { text: "Print" },
      //     { text: "Undo changes" },
      //     { text: "Other contacts" },
      //   ],
      // },
      // { icon: "mdi-cog", text: "Settings" },
      // { icon: "mdi-message", text: "Send feedback" },
      // { icon: "mdi-help-circle", text: "Help" },
      // { icon: "mdi-cellphone-link", text: "App downloads" },
      // { icon: "mdi-keyboard", text: "Go to the old version" },
      // { icon: "mdi-keyboard", heading: "Go to the old version" },
    ],
  }),
};
</script>
<style scoped>
.sidebar-link {
  text-decoration: none;
}
.sidebar-link-item:hover {
  background-color: #787bf7 !important;
}
.sidebar-link-item2 {
  color: orange !important;
  background-color: #5155f8 !important;
}
.sidebar-link-item2:hover {
  color: orange !important;
  background-color: #6468fd !important;
}
.sidebar-style {
  color: #fff;
  font-weight: 700;
  background-color: #787bf7 !important;
}
/*
.shaped:hover {
  background-color: #5155f8  !important;
  color: #FFFFFF !important;
  width:100%;
}
*/
</style>