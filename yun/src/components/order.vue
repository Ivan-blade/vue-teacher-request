<template>
    <div>
        <v-header>
            <div class="orderInfo">
                <p>我的订单</p>
                <i class="iconfont icon-kaipiao left"></i>
                <i class="iconfont icon-sousuo right fs"></i>
            </div>
        </v-header>
    </div>
</template>

<script>
import mHeader from './mHeader'
export default {
  name: 'order',
  components: {
    'v-header': mHeader
  }
}
</script>

<style lang="less" scoped>
.orderInfo{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    clear: both;
    .left{
        float: left;
        margin-left: 20px;
    }
    .right{
        float: right;
        margin-right: 20px;
        font-size: 42px;
    }
}
</style>
