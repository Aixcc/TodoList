<template>
  <div class="ListItem">
    <!-- 导航栏 -->
    <div class="nav_bar">编辑今日事项</div>
    <!--x 导航栏 x-->

    <!-- 今日日期 -->
    <div class="today">{{today}}</div>
    <!--x 今日日期 x-->

    <!-- 新建待办事项 -->
    <van-row type="flex" justify="center">
      <van-col span="22">
        <div class="new_list">
          <span>新建事项</span>
          <div class="set_list">
            <van-field
              v-model="message"
              rows="2"
              autosize
              left-icon="smile-o"
              label=""
              type="textarea"
              maxlength="40"
              placeholder="请输入待办事项"
              show-word-limit
            />
          </div>
        </div>
      </van-col>
    </van-row>
    <!--x 新建待办事项 x-->

    <!-- 分割线 -->
    <van-divider
      class="divider"
      :style="{ color: '#007aff', borderColor: '#007aff', padding: '0 16px' }"
      >选择状态</van-divider
    >
    <!--x 分割线 x-->

    <!-- 选择事项状态 -->
    <van-row type="flex" justify="center">
      <van-col span="22">
        <van-tabs
          round
          v-model="activeName"
          :color="color"
          @click="setColor"
          class="tabs"
        >
          <van-tab title="普通" name="1">
            <van-cell-group>
              <van-field
                v-model="value1"
                label="备注"
                placeholder="请输入备注内容"
              />
            </van-cell-group>
          </van-tab>
          <van-tab title="较缓" name="2">
            <van-cell-group>
              <van-field
                v-model="value2"
                label="备注"
                placeholder="请输入备注内容"
              />
            </van-cell-group>
          </van-tab>
          <van-tab title="紧急" name="3">
            <van-cell-group>
              <van-field
                v-model="value3"
                label="备注"
                placeholder="请输入备注内容"
              />
            </van-cell-group>
          </van-tab>
        </van-tabs>
      </van-col>
    </van-row>
    <!--x 选择事项状态 x-->

    <!-- 分割线 -->
    <van-divider
      class="divider"
      :style="{ color: '#007aff', borderColor: '#007aff', padding: '0 16px' }"
      >是否定时</van-divider
    >
    <!--x 分割线 x-->

    <!-- 时间选择器 -->
    <van-row type="flex" justify="center">
      <van-col span="22">
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="timeValue"
          label="时间选择"
          placeholder="点击选择时间"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-datetime-picker
            type="time"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
      </van-col>
    </van-row>
    <!--x 时间选择器 x-->

    <!-- 表单提交按钮 -->
    <van-row type="flex" justify="center">
      <van-col span="22">
        <van-button type="primary" block color="#007aff" round
          >确认添加</van-button
        >
      </van-col>
    </van-row>
    <!--x 表单提交按钮 x-->
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: "ListItem",
  data() {
    return {
      message: "",
      activeName: 1,
      color: "#65c466",
      value1: "",
      value2: "",
      value3: "",
      timeValue: "",
      showPicker: false,
      today:''
    };
  },
  computed: {

  },
  mounted(){
    this.today = dayjs().format('YYYY-MM-DD')
  },
  methods: {
    setColor() {
      if (this.activeName == 3) {
        // 红
        this.color = "#f02b2b";
      } else if (this.activeName == 2) {
        // 黄
        this.color = "#e0e71f";
      } else {
        // 绿
        this.color = "#65c466";
      }
    },
    onConfirm(time) {
      this.timeValue = time;
      this.showPicker = false;
    },
  },
};
</script>

<style scoped lang="less">
.ListItem {
  .nav_bar {
    height: 50px;
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 17px;
    color: #007aff;
    background: #fefefe;
    text-align: center;
    line-height: 50px;
    letter-spacing: 4px;
  }
  .today {
    height: 40px;
    background: #fefefe;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    color: #007aff;
    font-weight: 300;
  }
  .new_list {
    span {
      font-size: 15px;
      font-weight: 600;
    }
    .set_list {
      margin-top: 5px;
      height: 150px;
      padding: 10px;
      border-radius: 8px;
      background: #fefefe;
      margin: auto 0;
      /deep/ .van-icon {
        font-size: 25px;
        color: #007aff;
      }
      /deep/ .van-field__control {
        margin-left: 30px;
      }
    }
  }
  .tabs {
    /deep/ .van-tab__text {
      font-size: 15px;
      font-weight: 300;
      border-radius: 8px;
    }
    .van-tab__pane {
      margin-top: 8px;
      height: 80px;
      border-radius: 8px;
      // padding-left: 15px;
      // background: #fefefe;
      font-size: 18px;
      line-height: 50px;
      /deep/ .van-field {
        line-height: 80px;
      }
    }
  }
  /deep/ .van-field__body {
    input {
      color: #007aff;
      font-size: 15px;
      font-weight: 600;
    }
  }
  .divider {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  button {
    margin-top: 40px;
    margin-bottom: 30px;
  }
}
</style>
