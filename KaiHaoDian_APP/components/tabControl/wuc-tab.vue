<template>
  <scroll-view
    class="nav"
    :class="tabClass"
    :style="tabStyle"
    scroll-with-animation
    scroll-x
    :scroll-left="scrollLeft"
		id="Nav"
  >
    <div v-if="!textFlex">
      <div
        class="cu-item"
        :class="index === tabCur ? selectClass + ' cur':''"
        v-for="(item,index) in tabList"
        :key="index"
        :id="index"
        @tap="tabSelect(index,item.id)"
      >
        <text :class="item.icon"></text>
        <span style='font-size: 28upx;'>{{item.name}}</span>
      </div>
    </div>

    <div class="flex text-center" v-if="textFlex">
      <div
        class="cu-item flex-sub"
        :class="index === tabCur ? selectClass + ' cur':''"
        v-for="(item,index) in tabList"
        :key="index"
        :id="index"
        @tap="tabSelect(index,item.id)"
      >
        <text :class="item.icon"></text>
        <span>{{item.name}}</span>
      </div>
    </div>
  </scroll-view>
</template>
<script>
export default {
  name: "wuc-tab",
  data() {
    return {};
  },
  props: {
    tabList: {
      type: Array,
      default() {
        return [];
      }
    },
    tabCur: {
      type: Number,
      default() {
        return 0;
      }
    },
    tabClass: {
      type: String,
      default() {
        return "";
      }
    },
    tabStyle: {
      type: String,
      default() {
        return "";
      }
    },
    textFlex: {
      type: Boolean,
      default() {
        return false;
      }
    },
    selectClass: {
      type: String,
      default() {
        return "text-green";
      }
    }
  },
  methods: {
    tabSelect(index) {
      if (this.currentTab === index) return false;
   
      this.$emit("chags", index);
    }
  },
  computed: {
    scrollLeft() {
      return (this.tabCur - 1) * 60;
    }
  }
};
</script>
<style>

@import "wuc-tab.css";
</style>
