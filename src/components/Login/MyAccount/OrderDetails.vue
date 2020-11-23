<template>
  <div>
    <v-container fluid>
      <v-card flat>
        <v-tabs
          v-model="tabs"
          color="white"
          dark
          dense
          background-color="blue darken-3"
          fixed-tabs
        >
          <v-tab style="font-size: 12px">
            <center>Your Orders</center>
          </v-tab>
          <v-tab style="font-size: 12px">
            <center>Cancelled Orders</center>
          </v-tab>
          <v-tab style="font-size: 12px">
            <center>Return Orders</center>
          </v-tab>
          <v-tab style="font-size: 12px">
            <center>Browsing History</center>
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <v-card flat>
              <v-card-text> Test </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text> Test 1</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text> Test 2</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text> Test 3</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: null,
    };
  },
};
</script>