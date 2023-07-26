<template>
    <div class="container">
        <el-row :gutter="0">
            <el-col :span="1"><div class="grid-content ep-bg-purple" />
                <div class="title">{{ title }}:</div>
            </el-col>
            <el-col :span="23"><div class="grid-content ep-bg-purple" />
                <ul class="list">
                    <li :class="{activity: index === ''}" @click="handle('')">
                        <span>全部</span>
                    </li>
                    <li v-for="item in list" :key="item.value" :class="{activity: index === item.value}" @click="handle(item.value)">
                        <span>{{ item.name }}</span>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { HospitalLevelAndRegionArr } from '@/api/home/type.ts';
import emitter from '@/api/home/message.ts';
import { ref } from 'vue';

const props = defineProps<{
    title?: String
    list?: HospitalLevelAndRegionArr
}>()
const index = ref('');
const handle = (value: string) => {
    index.value = value;
    emitter.emit('selectLevelORRegion', {title: props.title, value})
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