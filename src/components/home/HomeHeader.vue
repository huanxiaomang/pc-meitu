<template>
    <div class="header">
        <img src="../../assets/1.png" alt="" class="bb">
        <div class="ikun">
        </div>
        <div class="headerList">
            <div class="listItem">
                <router-link target="_blank" :to="{ name: 'home' }" class="rlink">美图</router-link>
            </div>
            <div class="listItem">
                <router-link target="_blank" :to="{ name: 'description' }" class="rlink">说明</router-link>
            </div>
            <div class="listItem">
               <router-link target="_blank" :to="{ name: 'sports' }" class="rlink">运动</router-link>
            </div>
            <div class="listItem"><a href="G:\\学习\\作业\\中国\\中国\\index.html">轮播</a></div>
            <div class="listItem">核弹</div>
            <div class="listItem">
                <router-link target="_blank" :to="{ name: 'setting' }" class="rlink">管理</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';

export default {

    props: {
        activeItem: {
            type: Number,
            default: 0
        }
    },

    setup(props) {

        onMounted(() => {
            console.log(props.activeItem);
            document.querySelectorAll('.listItem')[props.activeItem].id = 'xuan';
        })
    }

}
// console.log(activeItem);
</script>



<style lang="less" scoped>
a:visited {
    color: #000;
}

a:link {
    color: #000;
}

* {
    text-decoration: none;

}

.header {

    width: 100%;
    height: 49px;
    background-color: white;
    display: flex;
    position: relative;

    .bb {
        display: block;

        margin-left: 10%;

    }

    .headerList {

        display: flex;
        width: 600px;
        height: 100%;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        right: 14%;
        padding: 0 1%;

        .listItem {

            box-sizing: border-box;
            cursor: pointer;
            font-family: Noto Sans SC;
            font-style: normal;
            font-weight: 400;
            width: calc((100%/6)*0.8);
            color: #000;
            height: 100%;
            text-align: center;
            line-height: 49px;
            transition: font-size 0.3s;


        }

        #xuan {
            border-bottom: 3px solid #dd7694;
        }

        .listItem:hover {
            font-size: 19px;
        }
    }
}
</style>