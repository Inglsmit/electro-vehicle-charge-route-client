<template>
  <q-page id="savedRoutes">
    <q-toolbar class="text-white bg-teal-8">
      <q-toolbar-title>
        Saved Routes
      </q-toolbar-title>
      <q-btn flat round dense icon="add" size="20px" />
    </q-toolbar>

    <div class="section-title">
      <div class="text-h6 q-mx-sm">Select one of your saved routes</div>
    </div>

    <div class="text-center q-pt-lg">
      <q-btn flat round dense icon="add_circle_outline" size="33px" />
      <div class="text-h6">Add some routes!</div>
      <div class="q-pa-md info">This is where you can start your favorite journey!</div>
    </div>

    <q-scroll-area class="list">
      <q-list>
        <q-item>
          <q-item-section top avatar>
            <q-avatar color="green" text-color="white" icon="directions" />
          </q-item-section>

          <q-item-section>
            <q-item-label>New road!</q-item-label>
            <q-item-label caption>
              <div class="q-px-sm"><strong>From:</strong> From section</div>
              <div class="q-px-sm"><strong>To:</strong> To section</div>
              <div class="q-px-sm"><strong>Search radius:</strong> 3</div>
            </q-item-label>
          </q-item-section>

          <q-item-section side bottom>
            <q-btn class="q-ma-sm" label="Go to map" size="sm" color="green" />
            <q-btn class="q-mx-sm" label="Delete" size="sm" color="red" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

  </q-page>
</template>

<script setup>

</script>

<style lang="scss">
#savedRoutes{
  .section-title{
    padding: 12px 10px 8px 10px;
    max-width: 500px;
    margin: 0 auto;
  }
  .info{
    font-size: 16px;
  }
  .list{
    margin: 0 auto;
    height: calc(100vh - 250px);
    max-width: 500px;
  }
}
</style>
