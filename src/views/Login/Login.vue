<template>
  <div style="padding: 20px">
    <el-form :model="form" label-width="120">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item align="center">
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      this.$http.post('api/permission/getMenu', this.form).then(res => {
        res = res.data;
        //  如果登录成功
        if (res.code === 20000) {
          // 防止二次登录
          this.$store.commit('clearMenu');
          // 调用cookie的方法
          this.$store.commit('setMenu', res.data.menu);
          // 调用token
          this.$store.commit('setToken', res.data.token);
          //   操作动态路由
          this.$store.commit('addMenu', this.$router);
          this.$router.push({ name: 'home' });
        } else {
          this.$message.warning(res.data.message);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-form {
  width: 50%;
  margin: auto;
  padding: 45px;
  height: 450px;
  background-color: #fff;
}
</style>
