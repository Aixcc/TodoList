<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <!-- /子路由出口 -->

    <!-- 底部导航栏 -->
    <van-tabbar
      v-model="active"
      route
      active-color="#007aff"
      inactive-color="#000"
    >
      <van-tabbar-item icon="descending" to="/">MyList</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/about">About</van-tabbar-item>
    </van-tabbar>
    <!-- /底部导航栏 -->
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",
  components: {},
  props: {},
  data() {
    return {
      active: 0,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
  },
  methods: {
    
  },
};
</script>

<style scoped lang="less">

</style>
