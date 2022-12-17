<template>

</template>
    
<script>
import {getSearchMusic} from '@/request/music/api'
import { onMounted } from 'vue';

export default {

    setup(props) {




        onMounted(async () => {

            let searchResult = await getSearchMusic('refrain');

            console.log(searchResult);

        })
    }
}

</script>
    
<style lang="less" scoped>

</style>