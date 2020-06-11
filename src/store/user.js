import Cookie from 'js-cookie';
export default {
  state: {
    token: ''
  },
  mutations: {
    setToken(state, val) {
      state.token = val;
      Cookie.set('token', val);
    },
    clearToken(state) {
      state.token = '';
      Cookie.remove('token');
    },
    // 避免刷新后的token消失
    getToken(state) {
      state.token = Cookie.get('token');
    }
  },
  actions: {}
};
