<template>
  <div class="container-fluid ps-md-0">
    <div class="row g-0">
      <div class="d-none d-md-flex col-md-4 bg-image"></div>
      <div class="col-md-8">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <div
                  class="align-self-center margin-20 d-flex justify-content-center"
                >
                  <div
                    class="br-15 padding-xs-10 padding-sm-40 br-10 padding-md-40"
                    style="max-width: 500px !important"
                  >
                    <div class="align-self-center text-left">
                      <div>
                        <div class="row">
                          <div class="col-12">
                            <div class="mb-2" style="font-size: 40px">
                              {{ title }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <form @submit.prevent="onSubmit">
                        <div class="form-group mb-4">
                          <div class="f-16 mb-2">Email</div>
                          <input
                            type="text"
                            v-model="form.email"
                            class="br-8 f-12 pright-55 ptop-18 pbottom-18 width-lg-405 form-control maxwidth-405"
                          />
                        </div>
                        <div class="form-group position-relative mb-4">
                          <div class="f-16 mb-2">Password</div>
                          <input
                            type="password"
                            v-model="form.password"
                            class="br-8 f-12 pright-55 ptop-18 pbottom-18 width-lg-405 form-control maxwidth-405"
                          />
                        </div>

                        <div>
                          <button
                            class="btn btn-primary btn-sm btn-block text-white"
                            type="submit"
                          >
                            {{ labelBtn }}
                          </button>
                        </div>
                        <div class="d-flex justify-content-between mt-3 f-12">
                          <small>
                            <router-link :to="linkTo">
                              {{ labelLinkTo }}
                            </router-link>
                          </small>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
  props: {
    title: String,
    labelBtn: String,
    linkTo: String,
    labelLinkTo: String,
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit: function () {
      this.$emit("btnSubmit", this.form);
    },
  },
};
</script>

<style>
@import "~@/assets/style/main.scss";
</style>

<style scoped>
.eye-icon {
  right: 15px;
  top: 33px;
  z-index: 2;
}
.ico-input {
  position: absolute;
  z-index: 1;
  left: 13px;
  top: 8px;
}

.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  color: #333333;
}
.login {
  min-height: 100vh;
}

.bg-image {
  background-image: url(/img/bg/login.png);
  background-size: cover;
  background-position: center;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}

@media (max-width: 575px) {
}
@media (min-width: 576px) {
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
@media (min-width: 1441px) {
  .bg-login {
    height: 100vh;
  }
}
</style>
