<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-right mt-4 mb-4">
        <router-link :to="{ name: 'add-blog-post' }" class="btn btn-primary"
          >Add New
        </router-link>
      </div>

      <div class="col-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="blogpost in blogposts" :key="blogpost.id">
              <td>{{ blogpost.title }}</td>
              <td>{{ blogpost.description }}</td>
              <td>
                <router-link
                  :to="{ name: 'edit-blog-post', params: { id: blogpost.id } }"
                  class="btn btn-primary"
                  >Edit
                </router-link>
                <button
                  @click.prevent="deleteBlogPost(blogpost.id)"
                  class="btn btn-danger ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/services/db";

export default {
  name: "blogposts",
  firestore: {
    blogposts: db.collection("blogposts"),
  },
  data() {
    return {
      blogposts: [],
    };
  },
  methods: {
    deleteBlogPost(id) {
      if (navigator.onLine) {
        if (window.confirm("Do you really want to delete?")) {
          this.$store.commit("loader/setLoading", true);
          db.collection("blogposts")
            .doc(id)
            .delete()
            .then(() => {
              this.$store.commit("loader/setLoading", false);
              this.$swal({
                text: "Item deleted!",
                icon: "success",
                confirmButtonText: "Ok",
              });
            })
            .catch((error) => {
              this.$store.commit("loader/setLoading", false);
              console.error(error);
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
  created() {
    let token = sessionStorage.getItem("token");
    if (!token) {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
