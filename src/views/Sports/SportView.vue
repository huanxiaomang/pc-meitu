<template>
    <HomeHeader :activeItem="2" />
    <div class="biao">—————————— 品质大牌 ——————————</div>
    <div class="main">
        <div class="row"><img src="../../assets/b1.png" title="anta" width="80%" height="80%">
            <div class="row1"><img src="../../assets/s1.png" width="108px" height="36px"></div>
            <div class="zi">永不止步</div>
            <button>点击了解详情</button>
        </div>
        <div class="row"><img src="../../assets/b2.png" title="lining" width="80%" height="80%">
            <div class="row1"><img src="../../assets/s2.png" width="108px" height="36px"></div>
            <div class="zi">国内品牌领导者</div>
            <button>点击了解详情</button>
        </div>
        <div class="row"><img src="../../assets/b3.png" title="timberland" width="80%" height="80%x">
            <div class="row1"><img src="../../assets/s3.png" width="108px" height="36px"></div>
            <div class="zi">国际知名品牌</div>
            <button>点击了解详情</button>
        </div>
    </div>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader.vue'

export default {

    components:{
        HomeHeader,
    }
}
</script>

<style lang="less" scoped>
.main {
    width: 80%;
    height: 256px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 40px auto;


}

.row {
    width: 380px;
    height: 560px;
    text-align: center;
}

.biao {
    font-size: larger;
    text-align: center;
    margin: 47px 0px 190px 0px;
}

.main1 {
    width: -1px;
    height: 36px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 40px auto;


}

.row1 {
    width: 100%;
    height: 100px;
    margin-top: 10px;
}

.zi {
    size: 0px;
}
</style>