<template>
  <div>
    <v-container fluid>
      <v-card>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr style="background: #cacaca">
                <th class="text-left">Image</th>
                <th class="text-left">Name</th>
                <th class="text-left">Rate</th>
                <th class="text-left">Qty</th>
                <th class="text-left">Discount</th>
                <th class="text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>
                  <v-img
                    class="white--text align-end"
                    height="100px"
                    width="100px"
                    :src="item.img"
                    style="padding: 10px"
                  >
                  </v-img>
                </td>
                <td>{{ item.name }}</td>
                <td>&#8377; {{ item.mrp }}</td>
                <td>{{ item.qty }} Kg</td>
                <td>&#8377; {{ item.discount }}</td>
                <td>&#8377; {{ item.total }}</td>
              </tr>
              <tr style="background: #cacaca">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><b>Sub Total</b></td>
                <td>
                  <b style="color: blue">&#8377; {{ subtotal }}</b>
                </td>
              </tr>
              <tr style="background: #cacaca">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><b>Transport Charges</b></td>
                <td>
                  <b style="color: blue">&#8377; {{ transport }}</b>
                </td>
              </tr>
              <tr style="background: #cacaca">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><b>Grand Total</b></td>
                <td>
                  <b style="color: blue">&#8377; {{ grandtotal }}</b>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
      <br />
      <v-alert outlined color="red">
        <v-row>
          <div>
            Total Payable Amount :
            <span style="color: blue; font-size: 20px">
              &#8377; {{ grandtotal }}</span
            >
          </div>
          <v-spacer></v-spacer>
          <router-link
            class="sidebar-link"
            style="text-decoration: none"
            :to="{
              name: 'ProceedToPayment',
              params: { grand_total: grandtotal },
            }"
          >
            <v-btn color="warning"> Proceed To Checkout </v-btn>
          </router-link>
        </v-row>
      </v-alert>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      subtotal: 0,
      transport: 100,
      grandtotal: 0,
      desserts: [
        {
          name: "Potato",
          mrp: 159,
          qty: 4,
          discount: 59,
          total: 400,
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          name: "Apple",
          mrp: 237,
          qty: 7,
          discount: 137,
          total: 700,
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          name: "Orange",
          mrp: 262,
          qty: 2,
          discount: 112,
          total: 200,
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          name: "Onion",
          mrp: 305,
          qty: 9,
          discount: 205,
          total: 900,
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          name: "Ginger",
          mrp: 30,
          qty: 3,
          discount: 10,
          total: 60,
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
      ],
    };
  },
  mounted() {
    this.subtotal = 0;
    var i;
    for (i = 0; i < this.desserts.length; i++) {
      this.subtotal = this.desserts[i].total + this.subtotal;
    }
    this.grandtotal = this.transport + this.subtotal;
  },
  methods: {
    payfees() {
      console.log("test");
      alert("test");
    },
  },
};
</script>