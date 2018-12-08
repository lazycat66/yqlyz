<template>
<div id="components-layout-demo-basic">
    <a-layout>
    <a-layout-header>醉享</a-layout-header>
    <a-layout-content>
        <a-menu v-model="current" mode="horizontal" @click="swicthNav">
            <a-menu-item key="live">
            <a-icon type="home" />醉生活
            </a-menu-item>
            <a-menu-item key="weekend">
            <a-icon type="sound" />醉周末
            </a-menu-item>
            <a-menu-item key="shop">
            <a-icon type="shop" />最爱买
            </a-menu-item>
            <a-sub-menu>
            <span slot="title"><a-icon type="global" />一千零一醉</span>
                <a-menu-item key="dj"><a-icon type="user" />主播介绍</a-menu-item>
                <a-menu-item key="band"><a-icon type="paper-clip" />往期节目</a-menu-item>
                <a-menu-item key="feedback"><a-icon type="paper-clip" />反馈给我们</a-menu-item>
            </a-sub-menu>
        </a-menu>
	    <router-view class="main-content"></router-view>
    </a-layout-content>
    </a-layout>
</div>
</template>

<script>
export default {
    name: "App",
    data () {
        return {
            current: ['mail']
        }
    },
    methods:{
        swicthNav(e){
            this.$router.push({
                path: '/' + e.key
            })
        }
    }
};
</script>
