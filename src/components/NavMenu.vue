<template>
  <div>
    <el-menu
        :default-active="defaultActiveIndex"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        router
        active-text-color="#ffd04b">
      <el-menu-item index="/video">视频转码</el-menu-item>
      <el-menu-item index="/audio">音频转码</el-menu-item>
      <el-menu-item index="/image">图片转码</el-menu-item>
      <el-menu-item index="/document">文档转码</el-menu-item>
      <el-menu-item index="/api">接口调用</el-menu-item>
      <el-menu-item index="/about">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>
<script>

export default {
  name: 'NaviMenu',
  props: {
    msg: String
  },
  data() {
    return {
      defaultActiveIndex: '/audio',
    };
  },
}
</script>

<style scoped>
</style>
