<template>
  <div>
    <v-navigation-drawer class="d-print-none sidebar-style" v-model="$store.state.drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
         <v-combobox
          dense
          required
          :items="search_link_list"
          item-text="name"
          v-model="goto_link"
          label="Search links"
          outlined
          return-object
          clearable
          @change="gotoLink"
        />
        <v-divider></v-divider>
        <template>
          <div v-for="item in link_list" :key="item.role_type">
            <v-list-group
              v-if="item.role_type"
              :key="item.role_type"
              v-model="item.model"
              :prepend-icon="item.model ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              append-icon >
              <template v-slot:activator>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.role_type }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
              <v-list dense>
                <template>
                  <div v-for="role in item.roles" :key="role.role.role_displayname">
                    <div v-if="role.role.role_displayname == 'Student'">
                        <div v-for="(child, i) in role.smartrolelinks" :key="i">
                          <router-link
                            class="sidebar-link"
                            :to="{ name: child.link_vue_js_name, params: { role_type:item.role_type, role_name:role.role.role_displayname }}">
                            <v-list-item class="sidebar-link-item">
                              <!--<v-list-item-action v-if="child.icon">
                                  <v-icon>{{ child.icon }}</v-icon>
                              </v-list-item-action>-->
                              <v-list-item-content >
                                <v-list-item-title style="margin-left: 70px;">{{ child.link_displayname }}</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </router-link>
                        </div>
                    </div>
                    <div v-else>
                      <v-list-group
                        :key="role.role.role_displayname"
                        v-model="role.model"
                        :prepend-icon="role.model ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                        append-icon >
                        <template v-slot:activator>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>{{ role.role.role_displayname }}</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                        <div v-for="(child, i) in role.smartrolelinks" :key="i">
                          <router-link
                            class="sidebar-link"
                            :to="{ name: child.link_vue_js_name, params: { role_type:item.role_type_display_name, role_name:role.role.role_displayname }}">
                            <v-list-item class="sidebar-link-item">
                              <!--<v-list-item-action v-if="child.icon">
                                  <v-icon>{{ child.icon }}</v-icon>
                              </v-list-item-action>-->
                              <v-list-item-content >
                                <v-list-item-title style="margin-left: 70px;">{{ child.link_displayname }}</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </router-link>
                        </div>
                      </v-list-group>
                    </div>
                  </div>
                </template>
              </v-list>
            </v-list-group>
          </div>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      link_list: [],
      search_link_list : [],
      goto_link:null
    };
  },
  methods: {
    gotoLink(){
      if(this.goto_link!=null){
        // if(this.search_links.includes(this.goto_link)){
        //   //alert(this.goto_link.link)
        //   //this.$router.push({name:this.goto_link.link});
        //   let routeData = this.$router.resolve({name: this.goto_link.link});
        //   //this.goto_link=null;
        //   window.open(routeData.href, '_blank');
        // }
      }
    }
  },
  mounted() {
    // axios
    //   .get("/appLogin/getrolelinks")
    //     .then(res => {
    //       if (res.data.status == "SUCCESS") { 
    //         // console.log("success");
    //         // console.log(res.data)
    //         // console.log(res.data.link_list)
    //         // console.log(res.data.search_link_list)
    //         this.link_list = res.data.link_list;
    //         this.search_link_list = res.data.search_link_list;
    //         // console.log(this.search_link_list.link_displayname);
    //       } else {
    //         console.log("failed");
    //       }
    //       //console.log(res.data.link_list);
    //       //this.link_list = res.data.link_list;
    //     })
    //     .catch(error => {
    //       window.console.log(error);
    //       this.$router.push("/");
    //     });
  }
};
</script>
<style scoped>
  .sidebar-link {
    text-decoration: none;
  }
  .sidebar-link-item:hover {
    background-color: rgb(202, 206, 209) !important;
  }
  .sidebar-style {
    color:#000; 
    font-weight: 700;
    background-color: #d8dede; 
  }
</style>