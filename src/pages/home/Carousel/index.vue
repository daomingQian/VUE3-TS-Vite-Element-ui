<template>
  <div class="block text-center">
    <el-carousel height="300px">
      <el-carousel-item v-for="item in list" :key="item">
        <img :src="item" alt="" data-v-f1cc8bf4="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const list = ref<string[]>([]);
list.value = [
  'https://img2.baidu.com/it/u=1772420213,2213782839&fm=253&fmt=auto&app=138&f=JPEG?w=1200&h=300',
  'https://img-qn.51miz.com/Element/00/91/90/57/546bc28d_E919057_cc403ae9.jpg',
  'https://15100441.s21i.faiusr.com/2/ABUIABACGAAg7seLjgYokNnowQEwsAk4rAI.jpg',
  'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=2506f8bd213fb80e18dc698557b8444b/34fae6cd7b899e512b5cce9842a7d933c9950d6f.jpg'
  ]
</script>

<style scoped>

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>