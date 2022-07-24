<template>
  <div class="submit-form">
    <form @submit.prevent="onSubmit">
      <div class="form-group text-left mt-4">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="blogPost.title"
          name="title"
        />
      </div>

      <div class="form-group text-left">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="blogPost.description"
          name="description"
        />
      </div>

      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import { db } from "@/services/db";

export default {
  name: "edit-blog-post",
  data() {
    return {
      blogPost: {
        title: "",
        description: "",
      },
    };
  },
  computed: {
    blogPostId() {
      return this.$route.params.id || "";
    },
  },
  created() {
    let token = sessionStorage.getItem("token");
    if (!token) {
      this.$router.push("/login");
    } else {
      if (this.blogPostId) {
        let dbRef = db.collection("blogposts").doc(this.blogPostId);
        dbRef
          .get()
          .then((doc) => {
            this.blogPost = doc.data();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  },
  methods: {
    onSubmit() {
      if (navigator.onLine) {
        var data = {
          title: this.blogPost.title,
          description: this.blogPost.description,
        };
        this.$store.commit("loader/setLoading", true);
        if (this.blogPostId) {
          db.collection("blogposts")
            .doc(this.blogPostId)
            .update(data)
            .then(() => {
              this.$store.commit("loader/setLoading", false);
              this.$swal({
                text: "Updated item successfully!",
                icon: "success",
                confirmButtonText: "Ok",
              });
              this.$router.push("/blogposts");
            })
            .catch((e) => {
              this.$store.commit("loader/setLoading", false);
              console.log(e);
            });
        } else {
          db.collection("blogposts")
            .add(data)
            .then(() => {
              this.$store.commit("loader/setLoading", false);
              this.$swal({
                text: "Created new item successfully!",
                icon: "success",
                confirmButtonText: "Ok",
              });
              this.$router.push("/blogposts");
            })
            .catch((e) => {
              this.$store.commit("loader/setLoading", false);
              console.log(e);
            });
        }
      } else {
        this.$swal({
          text: "No Internet Connection",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  /* margin: auto; */
}
</style>
