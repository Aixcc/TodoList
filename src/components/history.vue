<template>
  <div class="history">
    <!-- 导航栏 -->
    <van-nav-bar title="将来事项" />
    <!--x 导航栏 x-->

    <!-- 选择日期 -->
    <van-row type="flex" justify="center">
      <van-col span="22">
        <van-cell title="选择日期" :value="date" @click="show = true" />
        <van-calendar v-model="show" @confirm="onConfirm" color="#007aff" />
      </van-col>
    </van-row>
    <!--x 选择日期 x-->

    <!-- 分割线 -->
    <van-divider
      class="divider"
      :style="{ color: '#007aff', borderColor: '#007aff', padding: '0 16px' }"
      >显示事项</van-divider
    >
    <!--x 分割线 x-->

    <!-- 显示事项 -->
    <van-row type="flex" justify="center">
      <van-col span="22">
        <div class="list_items">
          <van-empty description="暂无事项" />
        </div>
      </van-col>
    </van-row>
    <!--x 显示事项 x-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      show: false,
    };
  },
  name: "history",
  mounted() {},
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
};
</script>

<style scoped lang="less">
.history {
  /deep/ .van-nav-bar__content {
    .van-ellipsis {
      font-size: 18px;
      color: #007aff;
      letter-spacing: 4px;
    }
  }
  .van-cell {
    margin-top: 15px;
    .van-cell__title {
      font-size: 15px;
      color: #007aff;
      font-weight: 600;
    }
    .van-cell__value {
      font-size: 17px;
      font-weight: 600;
    }
  }
  .list_items {
    background: #fefefe;
  }
}
</style>
