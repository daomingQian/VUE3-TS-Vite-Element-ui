<template>
    <div>
        <p class = 'title'>医院</p>
        <Catalog :title = "title" :list = "list"/>
    </div>
</template>
<script lang="ts" setup>
import Catalog from '../../../components/comment/Catalog.vue';

const title = '等级'
const list = ['全部', '三级甲等', '三级乙等', '二级甲等', '二级乙等', '一等']
</script>
<style lang="scss" scoped>
.title{
    margin-bottom: 20px;
    font-size: 14px;
    color: #727a86;
}
</style>