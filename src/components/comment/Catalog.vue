<template>
    <div class="container">
        <el-row :gutter="0">
            <el-col :span="1"><div class="grid-content ep-bg-purple" />
                <div class="title">{{ title }}:</div>
            </el-col>
            <el-col :span="23"><div class="grid-content ep-bg-purple" />
                <ul class="list">
                    <li :class="{activity: index === 0}" @click="handle(0)">
                        <span>全部</span>
                    </li>
                    <li v-for="item in list" :key="item.id" :class="{activity: index === item.id}" @click="handle(item.id)">
                        <span>{{ item.name }}</span>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { HospitalLevelAndRegionArr } from '@/api/home/type.ts';
import { ref } from 'vue';
defineProps<{
    title?: String
    list?: HospitalLevelAndRegionArr
}>()
const index = ref(0);
const handle = (id: number) => {
    index.value = id;
}
</script>
<style lang="scss" scoped>
.container {
    margin-bottom: 10px;
    font-size: 14px;
    color: #727a86;
    .list {
        display: flex;
        flex-wrap: wrap;
        margin-left: 10px;
        li{
            margin-right: 20px;
            &:hover {
                color: #55a6fe;
                cursor: pointer;
            }
            margin-bottom: 10px;
        }
        .activity{
            color: #55a6fe;
        }
    }
}
</style>