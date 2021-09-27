<template>
  <div class="MyList">
    <!-- 子路由出口 -->
    <router-view />
    <!-- /子路由出口 -->

    <div class="list_bar" route>
      <!-- list_title_bar -->
      <div class="list_title_bar">
        <span>待办事项</span>
        <a href="#" @click="showPopup">编辑</a>
      </div>
      <!--x list_title_bar x-->

      <!-- list_-->
      <div class="list">
        <div class="title_bar">
          <span>今日事项</span>
          <van-icon class="icon" name="arrow" />
        </div>
        <van-empty description="暂无待办事项" />
        <ul class="list_items">
          <!-- <li>
            <van-checkbox v-model="checked">vue</van-checkbox>
            <div class="icon_list">
              <van-icon class="icon" name="edit"/>
              <van-icon class="icon" name="delete"/>
            </div>
          </li> -->
        </ul>
      </div>
      <!--x list x-->

      <!-- more_list -->
      <div class="more_list" @click="showPopup_history">
        <span>显示所有事项</span>
        <van-icon class="icon" name="arrow" />
      </div>
      <!--x more_list x-->

      <!-- list popup -->
      <van-popup
        class="popup"
        v-model="show"
        position="bottom"
        :style="{ height: '90%' }"
        round
        closeable
      >
        <list-item></list-item>
      </van-popup>
      <!--x list popup x-->

      <!-- history popup -->
      <van-popup
        class="popup"
        v-model="show_history"
        position="bottom"
        :style="{ height: '100%' }"
        closeable
      >
        <history></history>
      </van-popup>
      <!--x history popup x-->
    </div>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import History from './history.vue';
export default {
  components: { ListItem, History },
  name: "MyList",
  data() {
    return {
      checked: false,
      show: false,
      show_history: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    showPopup_history() {
      this.show_history = true;
    },
  },
};
</script>

<style scoped lang="less">
.MyList {
  .list_bar {
    // background-color: red;
    .list_title_bar {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 15px;
        font-weight: 600;
      }
      a {
        font-size: 15px;
        font-weight: 600;
        color: #007aff;
      }
    }
    .list {
      // width: 100%;
      height: 100%;
      background-color: #fefefe;
      border-radius: 8px;
      margin-top: 12px;
      padding: 15px;
      .title_bar {
        display: flex;
        justify-content: space-between;
        span {
          font-size: 10px;
          color: #007aff;
          font-weight: 400;
        }
        .icon {
          font-size: 15px;
          color: #c4c4c5;
        }
      }
      .list_items {
        margin-top: 20px;
        li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          .icon_list {
            .icon {
              margin-left: 10px;
              color: #c4c4c5;
              font-size: 15px;
            }
          }
        }
      }
    }
    .more_list {
      margin-top: 10px;
      background-color: #fefefe;
      font-size: 16px;
      font-weight: 600;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      border-radius: 8px;
      span {
        letter-spacing: 3px;
        color: #007aff;
      }
      .icon {
        color: #c4c4c5;
        margin: auto 0;
      }
    }
    .popup {
      background: #f2f2f7;
    }
  }
}
</style>
