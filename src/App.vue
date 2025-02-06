<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");

/* 전역 폰트 설정 */
* {
  font-family: "Noto Sans KR", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ant-input,
.ant-picker {
  font-family: inherit;
}

nav {
  padding-top: 30px;
  padding-bottom: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
