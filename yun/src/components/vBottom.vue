<template>
    <div class="bot">
        <i class="iconfont icon-fahuo fs ml" @click="goToItem"></i>
        <i class="iconfont icon-tonghuajilu fs" @click="goToRecord"></i>
        <i class="iconfont icon-dingdan fs" @click="goToOrder"></i>
        <i class="iconfont icon-wode1 fs mr" @click="goToHome"></i>
    </div>
</template>

<script>
export default {
  name: 'vBottom',
  methods: {
    goToItem () {
      this.$router.push({
        name: 'item-page'
      })
    },
    goToRecord () {
      this.$router.push({
        name: 'record'
      })
    },
    goToOrder () {
      this.$router.push({
        name: 'order'
      })
    },
    goToHome () {
      this.$router.push({
        name: 'myhome'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bot{
    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #cdc5bf;
    margin: 5px 2px;
    padding: 15px 0;
    background-color: white;
    border-top: 1px solid #b5b5b5;
    bottom: 0;
    left: 0;
    right: 0;
    .fs{
        font-size: 55px;
    }
    .ml{
        margin-left: 30px;
    }
    .mr{
        margin-right: 30px;
    }
}
</style>
