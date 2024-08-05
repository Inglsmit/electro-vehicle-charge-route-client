<template>
  <q-page id="loginPage">
    <q-toolbar class="text-white bg-teal-8">
      <q-toolbar-title>
        Login
      </q-toolbar-title>
    </q-toolbar>

    <q-scroll-area class="form-style">
      <div class="text-h6 text-center q-pt-md">
        <q-img src="/favicon.ico" width="60px" height="60px" />
        <div>Charge Map</div>
      </div>

      <div class="q-pa-md q-gutter-md">
        <div class="text-center">Register by filling in all the data</div>
        <q-input outlined stack-label label="Email">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>

        <q-input outlined stack-label label="Password">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>
        <div>
          <q-btn label="Login" size="lg" class="full-width" color="black" />
        </div>

        <div class="q-px-md q-mt-xl text-center">
          <div class="q-mb-md no-account">Don't you have an account?</div>
          <q-btn to="/auth/register" label="Register here" outline rounded size="md" color="teal" />
        </div>

      </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>

</script>

<style lang="scss">
#loginPage{
  .form-style{
    margin: 0 auto;
    height: calc(100vh - 180px);
    max-height: 600px;
  }
}
</style>
