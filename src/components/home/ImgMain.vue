<template>
    <div class="main">
        <img src="../../assets/p2.png">
        <div class="mainText">
            <div class="text">这是一个不知为何在展示美图的购物网站</div>
            <div class="searchMain">
                <input type="text" v-model="searchParams" class="input" @blur="searchBlur" @focus="searchFocus">
                <router-link :to="'/search/'+this.searchParams" class="link" >
                    <svg t="1666873253451" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="6402" width="200" height="200">
                    <path
                        d="M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z"
                        fill="#ffffff" p-id="6403"></path>
                </svg>
                </router-link>
                
            </div>


        </div>

    </div>
</template>

<script>

function $(val){
    return document.querySelector(val);
}


export default {


    methods:{
        searchBlur(){

            $(".input").style.border = '0px solid white';

        },
        searchFocus(){

            $(".input").style.border = '1px solid white';
            
        }
    },

    data(){
        return {
            searchParams:'',
        }
        
    }


}
</script>

<style lang="less" scoped>
.main {
    width: 100%;
    position: relative;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
    }

    .mainText {
        position: absolute;
        text-align: center;
        height: 20%;
        top: 35%;

        .text {
            font-size: 45px;
            font-family: Noto Sans SC;
            font-style: normal;
            font-weight: 200;
        }

        .searchMain {
            width: 319px;
            height: 54px;
            margin: 6% auto;
            position: relative;
            display: flex;
            align-items: center;

            input {
                background:none;  
                outline:none;  
                color: #f3f3f3;
                font-size: 20px;
                border:0px solid white;
                width: 100%;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.3);
                box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
                border-radius: 6px;
                padding-left: 3%;
            }




            .link{
                position: absolute;
                right: 3%;
                height: 34px;
                width: 34px;
                cursor: pointer;
                svg{
                    width: 100%;
                    height: 100%;
                }
            }

            
        }


    }


}
</style>