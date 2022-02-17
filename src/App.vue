<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div>
        <div v-for="(user, i) in $store.state.users.users" :key="i">
          <pre>
            {{ i }} index
            {{ user }}
          </pre>
        </div>
      </div>
      <form @submit.prevent="createPost">
        <input type="number" v-model="userId" placeholder="user id" />
        <input type="text" v-model="title" placeholder="title" />
        <textarea
          name="body"
          cols="30"
          rows="5"
          v-model="body"
          placeholder="body"
        ></textarea>
        <button>submit</button>
      </form>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    userId: "",
    title: "",
    body: "",
  }),
  methods: {
    createPost() {
      this.$store.dispatch("users/POST_USER", {
        id: this.$store.state.users.users.length + 1,
        userId: this.userId,
        title: this.title,
        body: this.body,
      });
    },
  },
  beforeCreate() {
    this.$store.dispatch("users/GET_USERS");
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
