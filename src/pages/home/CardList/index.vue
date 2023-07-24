<template>
    <div class="container">
        <div v-for="item,index in cardList" :key="index" class="box">
            <Card :title = "item.title" :level = "item.level" :time = "item.time" :url = "item.url"/>
        </div>
        
    </div>
</template>

<script lang="ts" setup>
import Card from '@/components/comment/Card.vue';
import { reqHostpital } from '@/api/home/index.ts';
import { ref } from 'vue';

const cardList = ref([])
const curPage = ref<number>(1);
const pageSize = ref<number>(10);
const getHospitalInfo = async (curPage: number, pageSize: number) => {
    const result = await reqHostpital(curPage, pageSize);
    console.log(result);;
}
getHospitalInfo(curPage.value, pageSize.value);
// reqHostpital(1, 10).then(res => {
//     console.log(res);
//     console.log(res.data.content);
    
//     for(const obj of res.data.content) {
//         cardList.push({
//             title: obj.hosname,
//             level: obj.param.hostypeString,
//             time: obj.createTime,
//             url: obj.hosname,
//         })
//     }
// })
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
</style>