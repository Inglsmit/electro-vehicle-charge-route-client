<template>
  <q-page id="accountManuPage">
    <q-toolbar class="text-white bg-teal-8">
      <q-toolbar-title>
        Account
      </q-toolbar-title>
    </q-toolbar>

    <div class="text-h6 text-center q-pa-xl">
      <q-avatar width="60px" height="60px" color="green">JD</q-avatar>
      <div>John Doe</div>
    </div>

    <div class="menu">
      <q-separator inset />

      <q-list class="q-mx-md">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded color="primary" text-color="white" icon="person" />
          </q-item-section>
          <q-item-section class="text-size-18">My Details</q-item-section>
          <q-item-section side>
            <q-icon name="arrow_right" size="35px" />
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator inset />

      <q-list class="q-mx-md">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded color="red" text-color="white" icon="logout" />
          </q-item-section>
          <q-item-section class="text-size-18">Logout</q-item-section>
          <q-item-section side>
            <q-icon name="arrow_right" size="35px" />
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator inset />
    </div>

  </q-page>
</template>

<script setup>

</script>

<style lang="scss">
#accountManuPage{
  .menu{
    margin: 0 auto;
    max-width: 500px;
  }
  .text-size-18 {
    font-size: 18px;
  }
}
</style>
