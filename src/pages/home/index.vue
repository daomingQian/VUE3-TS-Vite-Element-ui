<template>
    <div>
        <Carousel/>
        <Search/>
        <el-row :gutter="20">
            <el-col :span="18"><div class="grid-content ep-bg-purple" />
                <Level/>
                <Region/>
                <CardList/>
                <Pagination/>
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
            
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import Carousel from "./Carousel/index.vue";
import Search from "./Search/index.vue";
import Level from './Level/index.vue'
import Region from './Region/index.vue'
import CardList from './CardList/index.vue'
import Pagination from './Pagination/index.vue'
</script>

<style lang="scss" scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>