import Cookie from 'js-cookie';
export default {
  state: {
    isCollapse: false, //是否折叠
    currentMenu: null, //点击菜单
    menu: [], // 全部菜单
    //切换列表
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ]
  },
  mutations: {
    // 设置保存菜单
    setMenu(state, val) {
      // 对state中的menu进行赋值
      state.menu = val;
      Cookie.set('menu', JSON.stringify(val));
    },
    // 清除菜单
    clearMenu(state) {
      state.menu = [];
      Cookie.remove('menu');
    },
    // 添加菜单
    addMenu(state, router) {
      // 判断是否存在
      if (!Cookie.get('menu')) {
        return;
      }
      // 获取cookie中的menu
      let menu = JSON.parse(Cookie.get('menu'));
      // 将获取到的menu传到state中
      state.menu = menu;
      // 添加动态路由数组
      let currentMenu = [
        {
          path: '/',
          component: () => import(`@/views/Main`),
          children: []
        }
      ];
      // 对menu进行循环操作，来拼接路径
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`@/views/${item.url}`);
            return item;
          });
          currentMenu[0].children.push(...item.children);
        } else {
          item.component = () => import(`@/views/${item.url}`);
          currentMenu[0].children.push(item);
        }
      });
      console.log(currentMenu, 'cur');
      // 追加动态路由
      router.addRoutes(currentMenu);
    },
    //   选择菜单
    selectMenu(state, val) {
      //   val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val);
      if (val.name !== 'home') {
        state.currentMenu = val;
        let result = state.tabsList.findIndex(item => item.name === val.name);
        // 没找到就放进来
        result === -1 ? state.tabsList.push(val) : '';
        Cookie.set('tagList', JSON.stringify(state.tabsList));
      } else {
        state.currentMenu = null;
      }
    },
    getMenu(state) {
      if (Cookie.get('tagList')) {
        let tagList = JSON.parse(Cookie.get('tagList'));
        state.tabsList = tagList;
      }
    },
    // 关闭标签页
    closeTab(state, val) {
      // 遍历找到tabslist中有没有tablist,找到删除菜单的索引
      let result = state.tabsList.findIndex(item => item.name === val.name);
      // 删除
      state.tabsList.splice(result, 1);
      Cookie.set('tagList', JSON.stringify(state.tabsList));
    },
    // 收缩和展开
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {}
};
