<template>
    <Catalog :title = "title" :list = "list"/>
</template>
<script lang="ts" setup>
import Catalog from '../../../components/comment/Catalog.vue';

const title = '地区'
const list = [
    '全部', '南山区', '福田区', '罗湖区', '宝安区',
    '龙华区', '龙岗区', '光明区', '坪山区', '大鹏新区',
    '金华区', '雄安区', '海淀区', '岳阳楼区', '岳麓区'
    ]
</script>