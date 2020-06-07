<template>
  <el-container style="height:100%">
    <el-aside width="200px"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <common-tab></common-tab>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue';
import CommonAside from '@/components/CommonAside.vue';
import CommonTab from '@/components/CommonTab.vue';

export default {
  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #333;
}
</style>
