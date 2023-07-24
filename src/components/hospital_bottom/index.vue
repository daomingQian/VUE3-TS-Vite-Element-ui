<template>
    <div class="bottom">
        <div class="content">
            <div class="left">
                京ICP 130320982号 电话挂号 010-3284629272
            </div>
            <div class="right">
                <span>联系我们</span>
                <span>合作伙伴</span>
                <span>联系我们</span>
                <span>合作伙伴</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"> 
.bottom {
    width: 100%;
    height: 50px;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    .content {
        width: 1200px;
        height: 50PX;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        .right {
            span {
                margin: 0 5px;
                cursor: pointer;
            }
        }
    }
}
</style>