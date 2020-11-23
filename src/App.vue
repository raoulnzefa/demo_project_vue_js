<template>
  <div>
    <v-snackbar v-model="snackbar" :top="true" :color="color" :timeout="6000">
      <span v-if="snackbar_msg != null">{{ snackbar_msg }}</span>
      <v-btn dark text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-app>
      <transition>
        <router-view />
      </transition>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    isClosed: true,
    dialog: false,
    quick_links: false,
    snackbar_msg: "",
    color: "",
    snackbar: false,
    quicklinkslist: null,
    all_role_links: null,
    //2
    add_link: []
  }),
 // methods: {
//     openDialog() {
//       //location.reload();
//       this.dialog = true;
//     },
//     cancelDialog() {
//       this.dialog = false;
//       this.sliderCloseOpen(true);
//     },
//     showSnackbar(clr, msg) {
//       this.snackbar = true;
//       this.color = clr;
//       this.snackbar_msg = msg;
//     },

//     sliderCloseOpen(val) {
//       var quickslidediv = document.getElementById("quick_link_slider");
//       if (val) {
//         quickslidediv.style.right = "-256px";
//         this.isClosed = true;
//       } else {
//         this.isClosed = false;
//         quickslidediv.style.right = "0px";
//       }
//     },

//     deleteQuickLink(qlink) {
//       const formData = {
//         qlinkid: qlink.id
//       };
//       axios
//         .post("roleManagement/deleteQuickLinks", formData)
//         .then(res => {
//           if (res.data.msg == "200") {
//             this.quicklinkslist = res.data.quick_links;
//             this.all_role_links = res.data.all_role_links;
//             this.showSnackbar("#b71c1c", "Deleted successfully..."); // show snackbar on success
//           }
//         })
//         .catch(error => {
//           window.console.log(error);
//         })
//         .finally(() => {});
//       //alert("Delete " + qlink.id);
//     },
//     saveQuickLinks() {
//       if (this.add_link.length == 0) {
//         //alert("Please select")
//         this.showSnackbar("#b71c1c", "Please select"); // show snackbar on success
//         return;
//       }
//       axios
//         .post("roleManagement/saveQuickLinks", this.add_link)
//         .then(res => {
//           if (res.data.msg == "200") {
//             this.quicklinkslist = res.data.quick_links;
//             this.all_role_links = res.data.all_role_links;
//             this.sliderCloseOpen(false);
//             this.dialog = false;
//             this.showSnackbar("#4caf50", "Quick Link added successfully..."); // show snackbar on success
//           }
//         })
//         .catch(error => {
//           window.console.log(error);
//         })
//         .finally(() => {});
//     }
//     //
//   },
//   // watch: {
//   //   "$store.state.quick_links": function() {
//   //     this.quick_links = this.$store.state.quick_links;
//   //     axios
//   //       .post("AppLogin/getUserRoleLinks")
//   //       .then(res => {
//   //         if (res.data.msg == "200") {
//   //           this.quicklinkslist = res.data.quick_links;
//   //           this.all_role_links = res.data.all_role_links;
//   //         }
//   //       })
//   //       .catch(error => {
//   //         window.console.log(error);
//   //       })
//   //       .finally(() => {});
//   //   }
//   // }
 };
</script>
<style scoped>
.quick-link-slider-box {
  border: 1px solid #0000001f;
  position: fixed;
  top: 9%;
  right: -256px;
  width: 256px;
  height: 91%;

  background-color: white;
  transition-duration: 0.1s;
  transition-delay: 0.2s;
}
.theme--light.v-icon {
  color: orange;
}
.quick-link-icon {
  text-align: center;
  width: 28px;
  height: 28px;
  position: relative;
  left: -28px;

  transition-duration: 0.1s;
  transition-delay: 0.2s;
}
.sidebar-link {
  text-decoration: none;
}
.sidebar-link-item:hover {
  background-color: rgb(181, 186, 190) !important;
}
.quick-link-add-btn {
  position: absolute;
  right: 4px;
  top: 8px;
}
@media print {
  body {
    height: 100%;
    width: 100%;
  }
  .no-display{
    display: none !important;
  }
}
</style>
