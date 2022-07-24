<template>
  <div>
    <AuthForm
      @btnSubmit="handleBtnSubmit"
      title="Register"
      labelBtn="Register"
      linkTo="login"
      labelLinkTo="Back to Login"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AuthForm from "@/components/AuthForm.vue";

export default {
  metaInfo: {
    titleTemplate: "Register",
  },
  components: {
    AuthForm,
  },
  methods: {
    ...mapActions("auth", ["register"]),
    handleBtnSubmit: function (form) {
      this.register({
        email: form.email,
        password: form.password,
      })
        .then(() => {
          this.$swal({
            text: "Register Berhasil",
            icon: "success",
            confirmButtonText: "Ok",
          });
          this.$router.push("/login");
        })
        .catch((err) => {
          this.$swal({
            text: err.response.data.error,
            icon: "error",
            confirmButtonText: "Ok",
          });
          console.log(err.response.data);
        });
    },
  },
  created() {
    let token = sessionStorage.getItem("token");
    if (token) {
      this.$router.push("/");
    }
  },
};
</script>

