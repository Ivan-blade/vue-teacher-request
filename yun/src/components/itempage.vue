<template>
    <div>
        <v-header>
            <div>
                <ul class="pageInfo">
                    <li class="pageInfo-first">消息</li>
                    <li class="info-deal" @click="changeIntoFirst">在发货中</li>
                    <li class="info-deal" @click="changeIntoSecond">发货历史</li>
                    <li class="info-deal" @click="changeIntoThird">常发货源</li>
                </ul>
            </div>
        </v-header>
        <div class="page-content-first" v-if="pageIndex === 1">
            <div class="content-first">
                <p>您周围有<span>百万</span>司机等着您发货</p>
            </div>
            <div class="content-last">
                <p>发货</p>
            </div>
        </div>
        <div class="page-content-second" v-if="pageIndex === 2">

        </div>
        <div class="page-content-third" v-if="pageIndex === 3">
            <li><i class="iconfont icon-box"></i></li>
            <p>您尚未保存任何常发货源</p>
        </div>
    </div>
</template>

<script>
import mHeader from './mHeader'
export default {
  name: 'item-page',
  components: {
    'v-header': mHeader
  },
  data () {
    return {
      pageIndex: 1
    }
  },
  methods: {
    changeIntoFirst () {
      this.pageIndex = 1
    },
    changeIntoSecond () {
      this.pageIndex = 2
    },
    changeIntoThird () {
      this.pageIndex = 3
    }
  }
}
</script>

<style lang="less" scoped>
.pageInfo{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    line-height: 54px;
    font-size: 26px;
    .info-deal{
        padding: 3px 6px;
        border: 1px solid white;
    }
    li{
        letter-spacing: 2px;
    }
    .pageInfo-first{
        position: fixed;
        left: 20px;
        font-size: 28px;
    }
}
.page-content-first{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .content-first{
        margin-bottom: 25px;
        font-size: 25px;
        color: grey;
        letter-spacing: 4px;
        span{
            color: #ff4500;
        }
    }
    .content-last{
        margin-bottom: 40px;
        font-size: 32px;
        padding: 25px 65px;
        letter-spacing: 6px;
        background-color: #ee4e14;
        color: white;
    }
}
.page-content-second{}
.page-content-third{
    position: fixed;
    left: 0;
    right: 0;
    top: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    i{
        font-size: 200px;
        color: #c0c0c0;
    }
    p{
        color: grey;
        font-size: 25px;
        letter-spacing: 3px;
    }
}
</style>
