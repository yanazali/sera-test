<template>
  <div class="home">
    <div class="container mt-4">
      <div class="row">
        <div class="col-8 col-md-6">
          <div style="text-align: left; border-right: 1px solid black">
            <label>Data sebelum difilter:</label>
            <pre>{{ billdetails }}</pre>
          </div>
        </div>
        <div class="col-4 col-md-6">
          <div style="text-align: left">
            <label>Data sesudah difilter:</label>
            <pre>{{ billdetailsAfterFilter }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      billdetails: [
        {
          adminfee: "0.0",
          billid: "8",
          title: "TELKOMSEL",
          totalamount: "50149.00",
          descriptions: null,
          body: ["DENOM: 50000"],
        },
        {
          adminfee: "0.0",
          billid: "8",
          title: "TELKOMSEL",
          totalamount: "50149.00",
          descriptions: null,
          body: ["DENOM: 75000"],
        },
        {
          adminfee: "0.0",
          billid: "10",
          title: "TELKOMSEL",
          totalamount: "50149.00",
          descriptions: null,
          body: ["DENOM: 100000"],
        },
        {
          adminfee: "0.0",
          billid: "10",
          title: "TELKOMSEL",
          totalamount: "50149.00",
          descriptions: null,
          body: ["DENOM: 150000"],
        },
        {
          adminfee: "0.0",
          billid: "10",
          title: "TELKOMSEL",
          totalamount: "50149.00",
          descriptions: null,
          body: ["DENOM: 200000"],
        },
      ],
    };
  },
  computed: {
    billdetailsAfterFilter: {
      // getter
      get() {
        return this.billdetails
          .filter((x) => parseInt(x.body[0].split(" ")[1]) >= 100000)
          .map((val) => {
            let result = parseInt(val.body[0].split(" ")[1]);
            return result;
          });
      },
    },
  },
  created() {
    let token = sessionStorage.getItem("token");
    if (!token) {
      this.$router.push("/login");
    }
    console.log(this.billdetailsAfterFilter);
  },
};
</script>
