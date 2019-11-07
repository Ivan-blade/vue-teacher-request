<template>
    <div>
        <v-header>
            <div>
                <ul class="pageInfo">
                    <li class="first">消息</li>
                    <li class="info-deal">发货中</li>
                    <li class="info-deal">发货历史</li>
                    <li class="info-deal">常发货源</li>
                </ul>
            </div>
        </v-header>
    </div>
</template>

<script>
import mHeader from './mHeader'
export default {
  name: 'item-page',
  components: {
    'v-header': mHeader
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
        padding: 4px 8px;
        border: 1px solid white;
    }
    .first{
        position: fixed;
        left: 20px;
        font-size: 28px;
    }
}
</style>
