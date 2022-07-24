<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="navbar-nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">No 3</router-link>
      </li>
    </div>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/blogposts" class="nav-link">Blog Posts</router-link>
      </li>
    </div>
    <div class="navbar-nav ml-auto">
      <li class="nav-item">
        <button
          @click="onLogoutClick"
          class="btn btn-success btn-sm btn-block text-white"
          type="submit"
        >
          Logout
        </button>
      </li>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    onLogoutClick: function () {
      sessionStorage.removeItem("token");
      this.$swal({
        text: "Logout Berhasil",
        icon: "success",
        confirmButtonText: "Ok",
      });
      this.$router.push("/login");
    },
  },
};
</script>
