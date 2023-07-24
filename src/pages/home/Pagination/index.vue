<template>
    <div class="demo-pagination-block">
        <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="prev, pager, next, jumper, ->,  sizes, total"
        :total="40"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        />
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const currentPage = ref(1)
const pageSize = ref(10)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>