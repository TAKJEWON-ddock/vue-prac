<template>
  <RouterView></RouterView>
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
</style>
