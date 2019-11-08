<template>
    <div>
        <v-header>
            <div class="orderInfo">
                <p>我的订单</p>
                <i class="iconfont icon-kaipiao right1"></i>
                <i class="iconfont icon-sousuo right2 fs"></i>
            </div>
        </v-header>
        <div class="order-content">
            <p>
                <span>这边碰到点</span>
                <span>布局问题</span>
                <span>明天解决</span>
                <span>待支付</span>
                <span>待评价</span>
                <span>取消/退款</span>
            </p>
        </div>
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
    .right1{
        position: fixed;
        left: 5px;
    }
    .right2{
        position: fixed;
        left: 670px;
        font-size: 42px;
    }
}
.order-content{
    position: fixed;
    left: 0;
    right: 0;
    top: 90px;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-left: 2%;
    overflow-x: auto;
    p{
        span{
            width: 200px;
            height: 60px;
            display: inline-block;
            text-align: left;
            border: 1px solid red;
        }
    }
}
</style>
