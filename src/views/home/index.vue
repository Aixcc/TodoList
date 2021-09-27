<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <transition name="fade">
      <van-nav-bar title="Aixcc" class="nav_bar"  v-show="isShow" fixed />
    </transition>
    <!--x 顶部导航栏 x-->

    <!-- title -->
    <van-row type="flex" justify="center">
      <van-col span="22" class="title_bar">
        <h2>TodoList</h2>
        <van-icon
          class="icon_user"
          name="manager"
          color="#007aff"
        />
      </van-col>
    </van-row>
    <!--x title x-->

    <!-- mylist -->
    <van-row type="flex" justify="center">
      <van-col span="22">
        <my-list></my-list>
      </van-col>
    </van-row>
    <!--x mylist x-->
    
    <!-- MyClock -->
    <van-row type="flex" justify="center">
      <van-col span="22">
        <my-clock></my-clock>
      </van-col>
    </van-row>
    <!--x MyClock x-->
  </div>
</template>

<script>
import MyClock from '../../components/MyClock.vue';
import MyList from "../../components/MyList.vue";

export default {
  components: { MyList, MyClock },
  data() {
    return {
      isShow: false,
    };
  },
  name: "Home",
  mounted() {
    // 给window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    onClickRight() {
      this.isShow = !this.isShow;
    },
    // 添加这个handleScroll方法
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop)
      if(scrollTop > 60){
        this.isShow = true;
      }else{
        this.isShow = false;
      }
    },
    // 移除监听事件
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  },
};
</script>

<style scoped lang="less">
.home {
  /deep/ .van-nav-bar__content {
    height: 45px;
    border-bottom:1px solid rgb(190, 188, 188);
  }
  /deep/ .van-ellipsis {
    font-weight: 600;
    font-size: 20px;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 0.1s;
  }
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave-active {
    transition: opacity 0.1s;
  }
  .title_bar {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    h2 {
      display: inline-block;
      font-size: 25px;
    }
    .icon_user {
      margin: auto 0;
      font-size: 30px;
    }
  }
}
</style>
