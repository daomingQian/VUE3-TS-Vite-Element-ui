<template>
    <div class="container" v-if="cardList.length">
        <div v-for="item,index in cardList" :key="index" class="box">
            <Card :content = "item"/>
        </div>
    </div>
    <el-empty v-else description="没有医院" />
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
import { Content, HospitalResponseData } from '@/api/home/type.ts';
import emitter from '@/api/home/message.ts';
import { ref } from 'vue';
const cardList = ref<Content>([]);

const small = ref(false)
const background = ref(true)
const disabled = ref(false)
const level = ref('');
const region = ref('');
const curPage = ref<number>(1);
const pageSize = ref<number>(10);
const total = ref(10)
const getHospitalInfo = async (curPage: number, pageSize: number, level?: string, region?: string) => {
    const result: HospitalResponseData = await reqHostpital(curPage, pageSize, level, region);
    if(result.code === 200) {
        total.value = result.data.totalElements;
        cardList.value = result.data.content;
    }
}
getHospitalInfo(curPage.value, pageSize.value, level.value, region.value);
//根据等级和地区进行筛选
emitter.on('selectLevelORRegion', ({title, value}) => {
    if(title === '等级') {
        level.value = value;
        getHospitalInfo(curPage.value, pageSize.value, value, region.value);
        return;
    }
    if(title === '地区') {
        region.value = value;
        getHospitalInfo(curPage.value, pageSize.value, level.value, value);
        return
    }
})
//处理当前每页多少条
const handleSizeChange = (val: number) => {
    getHospitalInfo(curPage.value, val, level.value, region.value);
}
//处理当前第几页
const handleCurrentChange = (val: number) => {
    getHospitalInfo(val, pageSize.value, level.value, region.value);
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