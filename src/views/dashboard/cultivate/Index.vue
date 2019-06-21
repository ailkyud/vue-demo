<template>
  <page-view
    :avatar="avatar"
    :title="false"
  >
    <div slot="headerContent">
      <div class="title">{{ timeFix }}， </div>
      <div>中国电信 | paas培训演练大屏</div>
    </div>
    <div slot="extra">
      <a-row class="more-info">
        <a-col :span="8">
          <head-info
            title="参加人数"
            content="56"
            :center="false"
            :bordered="false"
          />
        </a-col>
        <a-col :span="8">
          <head-info
            title="团队数量"
            content="12"
            :center="false"
            :bordered="false"
          />
        </a-col>
        <a-col :span="8">
          <head-info
            title="培训组件"
            content="4"
            :center="false"
          />
        </a-col>
      </a-row>
    </div>

    <div class="page-header-index-wide page-header-wrapper-grid-content-main">
      <a-card
        style="width:100%"
        :bordered="false"
        :tabList="tabListNoTitle"
        :activeTabKey="noTitleKey"
        @tabChange="key => handleTabChange(key, 'noTitleKey')"
      >
        <docker-page v-if="noTitleKey === 'docker'"></docker-page>
        <redis-page v-else-if="noTitleKey === 'redis'"></redis-page>
        <kafka-page v-else-if="noTitleKey === 'kafka'"></kafka-page>
        <elasticsearch-page v-else-if="noTitleKey === 'elasticsearch'"></elasticsearch-page>
      </a-card>
    </div>

  </page-view>
</template>
</template>

<script>
import { PageView, RouteView } from '@/layouts'
import { DockerPage, RedisPage, KafkaPage, ElasticsearchPage } from './page'

import { timeFix } from '@/utils/util'
import HeadInfo from '@/components/tools/HeadInfo'
export default {
  components: {
    RouteView,
    PageView,
    DockerPage,
    RedisPage,
    KafkaPage,
    ElasticsearchPage,
    HeadInfo
  },
  data () {
    return {
      timeFix: timeFix(),
      avatar: '',
      user: {},
      loading: true,
      radarLoading: true,
      tagInputVisible: false,
      tagInputValue: '',

      tabListNoTitle: [
        {
          key: 'docker',
          tab: 'docker'
        },
        {
          key: 'redis',
          tab: 'redis'
        },
        {
          key: 'kafka',
          tab: 'kafka'
        },
        {
          key: 'elasticsearch',
          tab: 'elasticsearch'
        }
      ],
      noTitleKey: 'docker'
    }
  },
  computed: {
    userInfo () {
      return this.$store.getters.userInfo
    }
  },
  created () {
    this.user = this.userInfo
    this.avatar = this.userInfo.avatar
  },
  methods: {

    handleTabChange (key, type) {
      this[type] = key
    }
  }
}
</script>

<style lang="less" scoped>
.page-header-wrapper-grid-content-main {
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: 0.3s;

  .account-center-avatarHolder {
    text-align: center;
    margin-bottom: 24px;

    & > .avatar {
      margin: 0 auto;
      width: 104px;
      height: 104px;
      margin-bottom: 20px;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .username {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 4px;
    }
  }

  .account-center-detail {
    p {
      margin-bottom: 8px;
      padding-left: 26px;
      position: relative;
    }

    i {
      position: absolute;
      height: 14px;
      width: 14px;
      left: 0;
      top: 4px;
      background: url(https://gw.alipayobjects.com/zos/rmsportal/pBjWzVAHnOOtAUvZmZfy.svg);
    }

    .title {
      background-position: 0 0;
    }
    .group {
      background-position: 0 -22px;
    }
    .address {
      background-position: 0 -44px;
    }
  }

  .account-center-tags {
    .ant-tag {
      margin-bottom: 8px;
    }
  }

  .account-center-team {
    .members {
      a {
        display: block;
        margin: 12px 0;
        line-height: 24px;
        height: 24px;
        .member {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.65);
          line-height: 24px;
          max-width: 100px;
          vertical-align: top;
          margin-left: 12px;
          transition: all 0.3s;
          display: inline-block;
        }
        &:hover {
          span {
            color: #1890ff;
          }
        }
      }
    }
  }

  .tagsTitle,
  .teamTitle {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 12px;
  }
}
</style>
