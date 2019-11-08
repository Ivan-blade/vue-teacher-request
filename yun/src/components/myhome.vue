<template>
    <div>
        <div class="top">
            <i class="iconfont icon-shezhi sp"></i>
        </div>
        <div>
            <div class="ids">
                <div class="is">
                    <img src="../assets/images/first.jpg" alt="">
                </div>
                <div class="homeInfo">
                    <p class="fs">188****3273<span class="fb">未认证</span></p>
                    <p class="fc">认证后享受更多服务</p>
                </div>
            </div>
            <div>
                <p class="sum">仅需身份证认证即可认证，点击认证></p>
            </div>
        </div>
        <div class="tools">
            <p class="top-list">常用工具</p>
            <ul class="home-list">
                <li class="first">
                    <div>
                        <i class="iconfont icon-kehufuwu"></i>
                    </div>
                    <p>客户服务</p>
                </li>
                <li>
                    <div>
                        <i class="iconfont icon-pingjiaguanli"></i>
                    </div>
                    <p>评价管理</p>
                </li>
                <li>
                    <div>
                        <i class="iconfont icon-yijianfankui"></i>
                    </div>
                    <p>意见反馈</p>
                </li>
                <li class="last">
                    <div>
                        <i class="iconfont icon-shujutongji"></i>
                    </div>
                    <p>数据统计</p>
                </li>
            </ul>
            <p class="top-list">我的服务</p>
            <ul class="home-list">
                <li class="first">
                    <div>
                        <i class="iconfont icon-juliceliang"></i>
                    </div>
                    <p>里程计算</p>
                </li>
                <li class="last">
                    <div>
                        <i class="iconfont icon-wj-flyz"></i>
                    </div>
                    <p>法律公告</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'myhome'
}
</script>

<style lang="less" scoped>
.top{
    width: 100%;
    height: 100px;
    .sp{
        float: right;
        font-size: 40px;
        margin-top: 20px;
        margin-right: 20px;
        color: gray;
    }
}
.ids{
    display: flex;
    flex-direction: row;
    .is{
        width: 110px;
        height: 110px;
        margin-left: 25px;
        flex-shrink: 0;
        border-radius: 50%;
        overflow: hidden;
        border: 1PX solid grey;
        margin-right: 20px;
        img{
            width: 100%;
        }
    }
    .homeInfo{
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p{
            padding: 10px 0;
        }
        .fb{
            border-radius: 10px;
            border: 1px solid #d3d3d3;
            color: grey;
            padding: 4px;
            margin: 3px;
            margin-left: 8px;
        }
        .fc{
            color: #ff4500;
            letter-spacing: 3px;
        }
    }
}
.sum{
    margin-top: 25px;
    margin-left: 25px;
    font-size: 28px;
    letter-spacing: 4px;
    color: #ff4500;
}
.tools{
    margin-top: 20px;
    background-color: white;
    padding: 20px;
    .home-list{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 30px 0;
        li{
            text-align: center;
            i{
                font-size: 45px;
                color: #ff4500;
            }
            p{
                margin: 15px 0;
                font-size: 26px;
            }
        }
        .first{
            margin-left: 20px;
        }
        .last{
            margin-right: 20px;
        }
    }
    .top-list{
        margin: 30px 0;
        font-size: 32px;
    }
}
</style>
