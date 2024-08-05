<template>
  <q-page id="addRoute">
    <q-toolbar class="text-white bg-teal-8">
      <q-toolbar-title>
        Add Route
      </q-toolbar-title>
      <q-btn to="/route/saved-routes" flat round dense icon="collections_bookmark" />
    </q-toolbar>

    <q-scroll-area class="q-pa-md form-style">
      <div class="text-h6 q-pb-md">Create your route.</div>
      <span class="text-body1 q-pb-md">Pick a name for this route:</span>

      <q-input class="q-pb-md" outlined stack-label label="Name">
        <template v-slot:append>
          <q-icon name="close" />
        </template>
      </q-input>

      <div class="text-body1">Save your route.</div>
      <q-input class="q-pb-md" outlined stack-label label="From">
        <template v-slot:append>
          <q-icon name="close" />
        </template>
      </q-input>

      <q-input class="" outlined stack-label label="To">
        <template v-slot:append>
          <q-icon name="close" />
        </template>
      </q-input>

      <div class="q-pt-md">
        <q-btn label="Save Route" size="lg" class="full-width" color="black" />
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>

</script>

<style lang="scss">
#addRoute{
  .form-style{
    margin: 0 auto;
    height: calc(100vh - 180px);
    max-height: 500px;
  }
}
</style>
