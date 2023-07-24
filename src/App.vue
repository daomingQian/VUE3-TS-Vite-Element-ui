<template>
  <div class="container">
    <HospitalTop/>
    <div class="content">
      <!-- 展示路由组件 -->
      <router-view></router-view>
    </div>
    <HospitalBottom/>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    width: 1200px;
    margin-top: 70px;
  }
}

</style>