<template>
    <HomeHeader :activeItem="5" />
    <div class="text">设置图片类型</div>
    <div class="main">

        <div class="item random" @click="state.setVal('random')">

            <div class="wen">?</div>
            <div class="sc">随机</div>
            <!-- <img :src="state.imgList[0]" class="randomImg"> -->

        </div>
        <div class="item mp" @click="state.setVal('mp')">

            <img :src="state.imgList[1]" class="mpImg">
            <div class="sc">手机</div>

        </div>
        <div class="item pc" @click="state.setVal('pc')">

            <img :src="state.imgList[2]">
            <div class="sc">电脑</div>

        </div>

    </div>

    <ImportPic />

</template>

<script>
import ImportPic from '@/components/setting/ImportPic.vue'
import HomeHeader from '@/components/home/HomeHeader.vue'
import globalVal from '@/js/global'

import { getTu, getImgDetails, getType, setType } from '@/request/meitu/api'
import { reactive, onMounted } from 'vue'



export default {
    setup() {
        const state = reactive({
            async setVal(val) {
                globalVal.pictureType = val;
                console.log(this.classList);

                for (let n = 0; n < 3; n++) {
                    document.querySelectorAll('.item')[n].style.border = 'none';
                }
                $('.' + val).style.border = '2px solid #dd7694';

                console.log('设置图片类型为' + globalVal.pictureType);
                

            },
            imgList: [],
        }
        );
        onMounted(async () => {
            //state.imgList[0] = (await getTu({ sort: 'random', type: 'json', num: 1 })).pic[0];
            // state.imgList[1] = (await getTu({ sort: "mp", type: "json", num: 1 })).pic[0];
            // state.imgList[2] = (await getTu({ sort: "pc", type: "json", num: 1 })).pic[0];
            state.imgList[1] = 'https://tva4.sinaimg.cn/large/004kfMibgy1gunf6woq1qj62bc4mox6t02.jpg';
            state.imgList[2] = 'https://tva4.sinaimg.cn/large/ec43126fgy1h01vx0ps7ej24kv2y1u10.jpg';
            

        });
        return { state };
    },
    components: { HomeHeader,ImportPic }
}

function $(val) {
    return document.querySelector(val);
}



</script>

<style lang="less" scoped>
.text {
    width: 100%;
    text-align: center;
    margin: 20px auto;
}

.main {
    display: flex;
    justify-content: space-around;
    align-content: center;
    margin-bottom: 60px;

    .item {

        height: 500px;
        width: 350px;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-bottom: 15px;
        text-align: center;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
        border-radius: 10px;

        .mpImg {
            width: 300px;
            height: 400px;
            object-fit: cover;
            margin: 30px auto;
        }

        img {
            width: 300px;
            display: block;
            margin: 44% auto;

        }

        .wen {
            margin: 49% auto;
            font-size: 40px;
        }

        .sc {
            width: 350px;
            text-align: center;
            position: absolute;
            bottom: 15px;
        }



    }

    .item:hover {
        border: 2px solid #dd7694;
    }

    .active {
        border: 2px solid #dd7694;
    }

}

.wen {
    animation: turn 6s linear infinite;
}


@keyframes turn {
    0% {
        transform: rotate(0deg);
    }

    20% {
        transform: rotate(72deg);
    }

    40% {
        transform: rotate(144deg);
    }

    60% {
        transform: rotate(216deg);
    }

    80% {
        transform: rotate(288deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>