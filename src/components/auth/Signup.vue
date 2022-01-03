<template>
  <div class="signup">
    <Nav />
    <div class="splat"></div>
    <img src="./assets/images/takeOff.svg" class="takeOffCOntainer" />
    <img class="cash" src="./assets/images/cash.svg" alt="" />
    <img class="hand" src="./assets/images/hand.svg" alt="" />
    <img class="check" src="./assets/images/check.svg" alt="" />

    <div class="mainSection">
      <div class="textArea">
        <h1>Sign Up to Enjoy<br />Free Templates</h1>
        <p>
          If you already have an account<br />You can
          <router-link to="/signin">Sign In here!</router-link>
        </p>
      </div>
      <vs-card class="formCard" type="1">
        <template #text>
          <div class="center content-inputs">
            <vs-input v-model="name" placeholder="Name">
              <template #icon>
                <i class="las la-user" style="font-size: 1.2rem"></i>
              </template>
            </vs-input>
          </div>
          <div class="center content-inputs">
            <vs-input v-model="email" placeholder="Name" type="email">
              <template #icon>
                <i class="las la-at" style="font-size: 1.2rem"></i>
              </template>
            </vs-input>
          </div>
          <div class="center content-inputs">
            <vs-input
              type="password"
              v-model="password"
              placeholder="Password"
              :progress="getProgress"
              :visiblePassword="hasVisiblePassword"
              icon-after
              @click-icon="hasVisiblePassword = !hasVisiblePassword"
            >
              <template #icon>
                <i
                  v-if="!hasVisiblePassword"
                  class="las la-eye"
                  style="font-size: 1.2rem"
                ></i>
                <i
                  v-else
                  class="las la-eye-slash"
                  style="font-size: 1.2rem"
                ></i>
              </template>

              <template v-if="getProgress >= 100" #message-success>
                Secure password
              </template>
            </vs-input>
          </div>
          <div class="center signupButtonContainer">
            <vs-button class="signupButton" size="large" block
              >Sign Up</vs-button
            >
          </div>
        </template>
      </vs-card>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue"
export default {
  data: () => ({
    name: "",
    email: "",
    password: "",
    hasVisiblePassword: false,
  }),

  components: {
    Nav,
  },

  mounted() {
    this.$nextTick(() => {})
  },

  computed: {
    getProgress() {
      let progress = 0

      // at least one number

      if (/\d/.test(this.password)) {
        progress += 20
      }

      // at least one capital letter

      if (/(.*[A-Z].*)/.test(this.password)) {
        progress += 20
      }

      // at menons a lowercase

      if (/(.*[a-z].*)/.test(this.password)) {
        progress += 20
      }

      // more than 5 digits

      if (this.password.length >= 6) {
        progress += 20
      }

      // at least one special character

      if (/[^A-Za-z0-9]/.test(this.password)) {
        progress += 20
      }

      return progress
    },
  },
}
</script>

<style scoped>
@import url(./assets/signup.css);
</style>
