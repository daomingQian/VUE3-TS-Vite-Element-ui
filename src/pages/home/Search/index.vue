<template>
    <div class="search">
        <Autocomplete/>
        <Button/>
    </div>
</template>

<script lang="ts" setup>
    import Autocomplete from "./Autocomplete/index.vue";
    import Button from "./Button/index.vue";
</script>

<style scoped lang="scss">
.search{
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    ::v-deep(.el-input__wrapper) {
        width: 700px;
        height: 40px;
    }
    
}
</style>