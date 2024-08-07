<template>
  <q-page id="myDetailsPage">
    <q-toolbar class="text-white bg-teal-8">
      <q-toolbar-title>
        My Details
      </q-toolbar-title>
    </q-toolbar>

    <q-scroll-area class="form-style">
      <div class="q-pa-md q-gutter-md">
        <div class="text-center">Update ypur details!</div>

        <q-input outlined stack-label label="First name">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>

        <q-input outlined stack-label label="Last name">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>

        <div class="text-yellow-10 text-bold q-mt-md">NOTE: This email read only.</div>

        <q-input outlined stack-label readonly label="Email" />

        <div>
          <q-btn label="Update" size="lg" class="full-width" color="black" />
        </div>

      </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>

</script>

<style lang="scss">
#myDetailsPage{
  .form-style{
    margin: 0 auto;
    height: calc(100vh - 180px);
    max-height: 600px;
  }
}
</style>
