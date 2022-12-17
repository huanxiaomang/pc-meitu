<template>
    <div>
        <div class="rg_layout">
            <div class="rg_left">
                <p></p>
                <input type="file" name="" id="" />
                <p></p>
            </div>
            <div class="rg_center">
                <div class="rg_form">
                    <form action="#" method="post">
                        <br /><br />
                        <table>
                            <tr>
                                <td class="td_left"><label for="username">图片名</label></td>
                                <td class="td_right"><input type="text" name="username" id="username"
                                        placeholder="请输入图片名"></td>
                            </tr>
                            <tr>
                                <td class="td_left"><label for="password">作者</label></td>
                                <td class="td_right"><input type="password" name="password" id="password"
                                        placeholder="请输入作者"></td>
                            </tr>
                            <tr>
                                <td class="td_left"><label for="email">来源</label></td>
                                <td class="td_right"><input type="email" name="email" id="email" placeholder="请输入来源">
                                </td>
                            </tr>
                            <tr>
                                <td class="td_left"><label for="name">分类</label></td>
                                <td class="td_right"><input type="text" name="name" id="name" placeholder="请输入分类"></td>
                            </tr>
                            <tr>
                                <td class="td_left"><label for="birthday">发布日期</label></td>
                                <td class="td_right"><input type="date" name="birthday" id="birthday"></td>
                            </tr>
                            <tr>
                                <td class="td_left"><label for="checkcode">描述</label></td>
                                <td class="td_right"><input type="text" name="checkcode" id="checkcode"
                                        placeholder="请输入描述">
                                    
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" align="center"><input type="submit" id="btn_sub" value="录入"></td>
                            </tr>
                        </table>


                    </form>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

.rg_layout {
    width: 900px;
    height: 450px;
    border: 5px solid #EEEEEE;
    background-color: white;
    /*让div水平居中*/
    margin: auto;
    margin-top: 15px;
    margin-bottom: 60px;
}

.rg_left {
    float: left;
    margin: 15px;
    width: 20%;
}

.rg_left>p:first-child {
    color: #FFD026;
    font-size: 20px;
}

.rg_left>p:last-child {
    color: #A6A6A6;
}

.rg_center {
    /*border: 1px solid red;*/
    float: left;
    width: 450px;
    /*margin: 15px;*/
}

.rg_right {
    float: right;
    margin: 15px;
}

.rg_right>p:first-child {
    font-size: 15px;
}

.rg_right p a {
    color: pink;
}

.td_left {
    
    width: 100px;
    text-align: right;
    height: 45px;
}



.td_right {
    padding-left: 50px;
}

#username,
#password,
#email,
#name,
#tel,
#checkcode,
#birthday {
    width: 251px;
    height: 32px;
    border: 1px solid #A6A6A6;
    /*设置边框圆角*/
    border-radius: 5px;
    padding-left: 10px;
}

#checkcode {
    width: 110px;
}

#img_check {
    height: 32px;
    /*设置垂直居中*/
    vertical-align: middle;
}

#btn_sub {
    width: 150px;
    height: 40px;
    background-color: #FFD026;
    border: 1px solid #FFD026;
}
</style>