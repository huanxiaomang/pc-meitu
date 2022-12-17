<template>
    <div class="imgMain">
        <div class="imgdetail">
            <img :src=$route.params.imgLink alt="">
            <div class="detail">
                <div class="imgText">

                    <div class="biaoti">标题</div>
                    <div class="xiangqing">{{ state.imgTitle }}</div>
                    <div class="biaoti">作者</div>
                    <div class="xiangqing">{{ state.imgAuthor }}</div>
                    <div class="biaoti">作者Pixiv_ID</div>
                    <div class="xiangqing">{{ state.imgPixiv }}</div>
                    <!-- <img src="@/assets/saucenao.png" class="saucenao"> -->
                </div>
                <div class="linkButton">
                    <a :href="$route.params.imgLink"
                        @click="state.openDownloadDialog($route.params.imgLink, $route.params.imgLink)">
                        <div class="tolink">图片直链</div>
                    </a>
                    <a :href="'https://www.pixiv.net/artworks/' + state.imgPixivWork">
                        <div class="tolink">跳转Pixiv</div>
                    </a>


                </div>
            </div>


        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getImgDetails } from '@/request/meitu/api.js'




export default {


    setup() {

        const router = useRouter();

        function openDownloadDialog(url, saveName) {
            if (typeof url == 'object' && url instanceof Blob) {
                url = URL.createObjectURL(url); // 创建blob地址
            }
            var aLink = document.createElement('a');
            aLink.href = url;
            aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
            var event;
            if (window.MouseEvent) event = new MouseEvent('click');
            else {
                event = document.createEvent('MouseEvents');
                event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            }
            aLink.dispatchEvent(event);
        }


        const state = reactive({
            imgTitle: '搜索中',
            imgAuthor: '搜索中',
            imgPixiv: '搜索中',
            imgPixivWork: '',
            openDownloadDialog
        })

        onMounted(async () => {

            let imgData = await getImgDetails(router.currentRoute.value.params.imgLink);
            console.log(imgData.data);

            if (imgData.data == "ToFast") {

                state.imgTitle = '你获取的太快了';
                state.imgAuthor = '请休息30s';
                state.imgPixiv = '你滴明白？';
                state.imgPixivWork = imgData.data.pixiv_id;

            } else {

                state.imgTitle = imgData.data.title ? imgData.data.title : '无搜索结果';
                state.imgAuthor = imgData.data.member_name ? imgData.data.member_name : '无搜索结果';
                state.imgPixiv = imgData.data.member_id ? imgData.data.member_id : '无搜索结果';
                state.imgPixivWork = imgData.data.pixiv_id;
                console.log(state.imgPixivWork);
            }


        })

        return {
            state
        }

    }




}
</script>

<style lang="less" scoped>
.imgMain {
    width: 70%;
    margin: 2% auto;
    margin-bottom: 3%;

    .imgdetail {

        margin-top: 2%;
        display: flex;
        position: relative;
        object-fit: cover;

        img {

            display: block;
            border: 1px solid #eee;
            border-radius: 5px;
            width: 50vw;
        }

        .detail {
            width: 25%;
            height: 100%;
            background-color: #fff;
            position: absolute;
            right: 0px;
            padding: 10px;
            border-radius: 5px;

            .imgText {
                padding: 15px;



                .biaoti {
                    color: #666;
                    font-size: 14px;

                }

                .xiangqing {
                    margin: 5% 0 7% 0;
                    font-size: 20px;
                    font-weight: 500;
                }

                .saucenao {
                    width: 75px;
                    display: block;
                    margin-bottom: 10px;
                }


            }

            .linkButton {
                padding: 30px 0 0 12px;
                position: absolute;
                bottom: 4%;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;

                a {
                    display: block;
                    text-decoration: none;
                }

                .tolink {
                    margin-bottom: 10%;
                    height: 40px;
                    width: 140px;
                    text-align: center;
                    line-height: 40px;
                    background-color: #dd7694;
                    color: white;
                    border-radius: 40px;
                    cursor: pointer;

                }

                .tolink:hover{
                    background-color: #dd5c81;
                }


            }

        }


    }






}
</style>