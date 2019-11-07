<template>
    <div>
        <v-header>
            <div>
                <ul class="recordInfo">
                    <li class="re-mar">清空未读</li>
                    <li class="re-pad">通话记录</li>
                    <li class="re-mar">设置</li>
                </ul>
            </div>
        </v-header>
    </div>
</template>

<script>
import mHeader from './mHeader'
export default {
  name: 'record',
  components: {
    'v-header': mHeader
  }
}
</script>

<style lang="less" scoped>
.recordInfo{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .re-mar{
        font-size: 28px;
        margin: 0 20px;
    }
    .re-pad{
        padding-right: 45px;
    }
}
</style>
