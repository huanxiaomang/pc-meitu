<template>

    <img :src="state.imgList.pic" alt="">
    <div class="imgFlex">

        <router-link target="_blank" v-for="item in state.imgList.pic" :key="item"
            :to="{ name: 'imgDetail', params: { imgLink: item } }">
            <img :src="item">
        </router-link>


    </div>
    <div class="moreImg" @click="state.getImg">加载更多</div>


</template>

<script>
import { getTu, getImgDetails,getType } from '@/request/meitu/api';
import _lodash from 'lodash';
import globalVal from '@/js/global'

import { reactive, onMounted, mounted } from "vue";
import axios from 'axios';

function $(val) {
    return document.querySelectorAll(val);
}

//注释
{
    // window.on('scroll', _lodash.throttle(function () {
    //     // 判断是否滚动到底部的逻辑
    //     let pageHeight = $('body').height(),
    //         scrollTop = $(window).scrollTop(),
    //         winHeight = $(window).height(),
    //         thresold = pageHeight - scrollTop - winHeight;
    //     if (thresold > -100 && thresold <= 20) {
    //         console.log('end');
    //     }
    // }));

    // let observer = new IntersectionObserver(entries => {
    //     if (entries[0].intersectionRatio > 0) {
    //         console.log('进入可视区域');
    //         // do something
    //     } else {
    //         console.log('移出可视区域');
    //         // do something
    //     }
    // });

    // observer.observe($('.img40'));
}



export default {

    setup() {
        const state = reactive({
            imgUrl: '',
            imgData: {},
            imgDetails: {},
            imgList: [],
            imgListIndex: 0,
            async getImg() {

                let newimgList = await getTu({ sort: globalVal.pictureType, type: 'json', num: 20 });
                for (let n = 0; n < newimgList.pic.length; n++) {

                    let img = document.createElement('img');
                    let a = document.createElement('a');
                    a.style.display = 'block';
                    a.target = "_blank";
                    a.href = "/imgdetail/" + newimgList.pic[n].replaceAll('/', '%2F');
                    img.src = newimgList.pic[n];
                    a.appendChild(img);
                    document.querySelector('.imgFlex').appendChild(a);
                }

            }
        })



        // function handleScroll(e) {
        //     const { scrollTop, clientHeight, scrollHeight } = e.target
        //     // console.log(scrollTop, clientHeight, scrollHeight)
        //     if (scrollTop + clientHeight === scrollHeight) {
        //         console.log('滚动到底部啦');
        //     }
        // }

        onMounted(async () => {

            state.imgList = await getTu({ sort: globalVal.pictureType, type: 'json', num: 20 });
            console.log(state.imgList.pic[0].substring(30));
            console.log(globalVal.pictureType);
            globalVal.pictureType = await getType();
            console.log(globalVal.pictureType);


        })


        return { state }

    }

}
</script>

<style lang="less">
.imgFlex {
    width: 70%;
    margin: 2% auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1%;
    row-gap: 1%;




    img {
        height: 16vw;
        width: 16vw;
        object-fit: cover;
        border-radius: 1vw;
        display: inline-block;
        margin: 1% 0;
        border: 0px solid #eee;
        transition: border 0.3s;
    }

    img:hover {
        border: 3px solid #eee;
    }

}

.moreImg {

    position: fixed;
    bottom: 10px;
    right: 25px;
    margin-bottom: 0px;
    color: #553444;
    cursor: pointer;
    text-align: center;
    font-weight: 500;

}
</style>