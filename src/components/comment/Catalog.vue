<template>
    <div class="container">
        <el-row :gutter="0">
            <el-col :span="1"><div class="grid-content ep-bg-purple" />
                <div class="title">{{ title }}:</div>
            </el-col>
            <el-col :span="23"><div class="grid-content ep-bg-purple" />
                <ul class="list">
                    <li v-for="(item, index) in list" :key="item" :class="{activity: index === 0}">
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    title?: String
    list?: string[]
}>()
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