<template>
    <Catalog :title = "title" :list = "list"/>
</template>
<script lang="ts" setup>
import Catalog from '../../../components/comment/Catalog.vue';
import { reqHostpitalLevelAndRegion } from '@/api/home/index.ts';
import { HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData } from '@/api/home/type.ts';
import { ref } from 'vue';

const title = '地区'
const list = ref<HospitalLevelAndRegionArr>([]);

//获取地区数据
const getLevel = async () => {
    const result: HospitalLevelAndRegionResponseData = await reqHostpitalLevelAndRegion('Beijin');
    if(result.code === 200) {
        list.value = result.data;
    }
}
getLevel();
</script>