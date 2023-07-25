<template>
    <div>
        <p class = 'title'>医院</p>
        <Catalog :title = "title" :list = "list"/>
    </div>
</template>
<script lang="ts" setup>
import Catalog from '@/components/comment/Catalog.vue';
import { reqHostpitalLevelAndRegion } from '@/api/home/index.ts';
import { HospitalLevelAndRegionArr } from '@/api/home/type.ts';
import { ref } from 'vue';

const title = '等级'
const list = ref<HospitalLevelAndRegionArr>([]);

//获取医院等级数据
const getLevel = async () => {
    const result = await reqHostpitalLevelAndRegion('HosType');
    list.value = result.data;
}
getLevel();
</script>
<style lang="scss" scoped>
.title{
    margin-bottom: 20px;
    font-size: 14px;
    color: #727a86;
}
</style>