<template>
    <div class="container">
        <div v-for="item,index in cardList" :key="index" class="box">
            <Card :content = "item"/>
        </div>
    </div>
    <div class="demo-pagination-block">
        <el-pagination
        v-model:current-page="curPage"
        v-model:page-size="pageSize"
        :page-sizes="[5, 10, 20, 30, 40]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="prev, pager, next, jumper, ->,  sizes, total"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        />
    </div>
</template>

<script lang="ts" setup>
import Card from '@/components/comment/Card.vue';
import { reqHostpital } from '@/api/home/index.ts';
import { ref } from 'vue';
const cardList = ref([]);

const small = ref(false)
const background = ref(true)
const disabled = ref(false)
const curPage = ref<number>(1);
const pageSize = ref<number>(10);
const total = ref(10)
const getHospitalInfo = async (curPage: number, pageSize: number) => {
    const result = await reqHostpital(curPage, pageSize);
    total.value = result.data.totalElements;
    cardList.value = result.data.content;
}
getHospitalInfo(curPage.value, pageSize.value);
const handleSizeChange = (val: number) => {
    getHospitalInfo(curPage.value, val);
}
const handleCurrentChange = (val: number) => {
    getHospitalInfo(val, pageSize.value);
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box {
        margin-bottom: 10px;
    }
}
.demo-pagination-block{
    margin-bottom: 10px;
}
</style>