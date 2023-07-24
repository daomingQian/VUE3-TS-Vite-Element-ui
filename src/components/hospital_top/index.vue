<template>
    <div class="top">
        <div class="content">
            <div class="left">
                <img src="https://vitejs.cn/logo.svg" alt="" class="img">
                <p class="p">尚医通 预约挂号统一平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p>登陆/注册</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.top {
    width: 100%;
    height: 70px;
    background-color: fff;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 999;
    box-shadow: 0 0 3px 0 #ccc;
    .content {
        width: 1200px;
        height: 70px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            .img {
                width: 50px;
                height: 50px;
                margin-right: 10px;
            }
            .p {
                font-size: 20px;
                color: #55a6fe;
            }
        }
        .right {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #bbb;
            .help {
                margin-right: 10px;
            }
        }
    }
}
</style>