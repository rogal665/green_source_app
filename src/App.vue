<template>
  <div id="app" class="main">
    <div class="navbar">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.navbar {
  z-index: 2;
  height: 50px;
  background-color: #e7e6e6;
}
.content {
  height: 1fr;
}

.main {
  display: grid;
  grid-template-rows: 50px 1fr;
  overflow: hidden;
  height: 100vh;
}
</style>
