<template>
  <div class="ibk">
    <header class="ibk-header">
      <div class="ibk-inner">
        <div class="ibk-header-head">
          <div class="ibk-header-head__start">
            <NuxtLink to="/pub" class="ibk-header-head-logo"><img src="../assets/images/logo.png" alt="" /></NuxtLink>
          </div>
        </div>
      </div>
    </header>
    <div class="ibk-body">
      <div class="ibk-contents">
        <slot />
      </div>
    </div>
  </div>
</template>
