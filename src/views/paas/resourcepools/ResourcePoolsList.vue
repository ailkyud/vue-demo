<template>
  <div class="page-header-index-wide">
    <a-card
      :bordered="false"
      title="资源池"
    >
      <div>
        <a-card-grid
          style="height: 100px"
          class="project-card-grid"
          :key="i"
          v-for="(item, i) in resourcepools"
        >
          <a-card
            :bordered="false"
            :body-style="{ padding: 0 }"
          >
            <a-card-meta>
              <div
                slot="title"
                class="card-title"
              >
                <a-avatar
                  size="small"
                  :src="item.cover"
                />
                <a>{{ item.title }}</a>
              </div>
              <div
                slot="description"
                class="card-description"
              >
                {{ item.description }}
              </div>
            </a-card-meta>
          </a-card>
        </a-card-grid>
        <a-card-grid
          style="height: 100px"
          class="project-card-grid"
        >
          <a-card
            :bordered="false"
            :body-style="{ padding: 0 }"
          >
            <a-button
              class="new-btn"
              type="dashed"
            >
              <a-icon type="down-circle" />更多资源池
            </a-button>
          </a-card>
        </a-card-grid>
      </div>
      <div class="operate">
        <a-button
          type="dashed"
          style="width: 100%"
          icon="plus"
        >添加</a-button>
      </div>
    </a-card>

    <a-card
      style="margin-top: 24px"
      :bordered="false"
      :bodyStyle="{ padding: '16px 0', height: '100%' }"
      :style="{ height: '100%' }"
    >
      <div
        class="account-settings-info-main"
        :class="device"
      >
        <div class="account-settings-info-left">
          <a-menu
            :mode="device == 'mobile' ? 'horizontal' : 'inline'"
            :style="{ border: '0', width: device == 'mobile' ? '560px' : 'auto'}"
            :defaultSelectedKeys="defaultSelectedKeys"
            type="inner"
            @openChange="onOpenChange"
          >
            <a-menu-item key="/paas/resourcepools/base">
              <router-link :to="{ name: 'PoolsBaseSettings' }">
                资源池概况
              </router-link>
            </a-menu-item>
            <a-menu-item key="/paas/resourcepools/security">
              <router-link :to="{ name: 'PoolsSecuritySettings' }">
                权限证书
              </router-link>
            </a-menu-item>
            <a-menu-item key="/paas/resourcepools/custom">
              <router-link :to="{ name: 'PoolsCustomSettings' }">
                服务组件
              </router-link>
            </a-menu-item>
            <a-menu-item key="/paas/resourcepools/binding">
              <router-link :to="{ name: 'PoolsBindingSettings' }">
                资源对象
              </router-link>
            </a-menu-item>
            <a-menu-item key="/paas/resourcepools/notification">
              <router-link :to="{ name: 'PoolsNotificationSettings' }">
                部署日志
              </router-link>
            </a-menu-item>
          </a-menu>
        </div>
        <div class="account-settings-info-right">
          <div class="account-settings-info-title">
            <span>{{ $route.meta.title }}</span>
          </div>
          <route-view></route-view>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import { PageView, RouteView } from '@/layouts'
import { mixinDevice } from '@/utils/mixin.js'
export default {
  components: {
    RouteView,
    PageView
  },
  mixins: [mixinDevice],
  data () {
    return {
      resourcepools: [],

      // horizontal  inline
      mode: 'inline',

      openKeys: [],
      defaultSelectedKeys: [],

      // cropper
      preview: {},
      option: {
        img: '/avatar2.jpg',
        info: true,
        size: 1,
        outputType: 'jpeg',
        canScale: false,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 180,
        autoCropHeight: 180,
        fixedBox: true,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [1, 1]
      },

      pageTitle: ''
    }
  },
  created () {
    this.updateMenu()
  },
  mounted () {
    this.getResourcePools()
  },
  methods: {
    getResourcePools () {
      this.$http.get('/list/search/resourcepools')
        .then(res => {
          this.resourcepools = res.result && res.result.data
          this.loading = false
        })
    },
    onOpenChange (openKeys) {
      this.openKeys = openKeys
    },
    updateMenu () {
      const routes = this.$route.matched.concat()
      this.defaultSelectedKeys = [routes.pop().path]
    }
  }
}
</script>

<style lang="less" scoped>
.card-title {
  font-size: 0;

  a {
    color: rgba(0, 0, 0, 0.85);
    margin-left: 12px;
    line-height: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;

    &:hover {
      color: #1890ff;
    }
  }
}
.card-description {
  color: rgba(0, 0, 0, 0.45);
  height: 44px;
  line-height: 22px;
  overflow: hidden;
}

.new-btn {
  background-color: #fff;
  border-radius: 2px;
  width: 100%;
  height: 50px;
}

.ant-card-meta-description {
  color: rgba(0, 0, 0, 0.45);
  height: 44px;
  line-height: 22px;
  overflow: hidden;
}

.account-settings-info-main {
  width: 100%;
  display: flex;
  height: 100%;
  overflow: auto;

  &.mobile {
    display: block;

    .account-settings-info-left {
      border-right: unset;
      border-bottom: 1px solid #e8e8e8;
      width: 100%;
      height: 50px;
      overflow-x: auto;
      overflow-y: scroll;
    }
    .account-settings-info-right {
      padding: 20px 40px;
    }
  }

  .account-settings-info-left {
    border-right: 1px solid #e8e8e8;
    width: 224px;
  }

  .account-settings-info-right {
    flex: 1 1;
    padding: 8px 40px;

    .account-settings-info-title {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      margin-bottom: 12px;
    }
    .account-settings-info-view {
      padding-top: 12px;
    }
  }
}
</style>
