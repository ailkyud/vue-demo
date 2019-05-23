<template>
  <a-card :bordered="false">
    <a-row :gutter="8">
      <a-col :span="5">
        <s-tree
          :dataSource="appTree"
          :openKeys.sync="openKeys"
          :search="true"
          @click="handleClick"
          @add="handleAdd"
          @titleClick="handleTitleClick"
        ></s-tree>
      </a-col>
      <a-col :span="19">
        <div>
          <a-card :bordered="false">
            <a-row>
              <a-col
                :sm="8"
                :xs="24"
              >
                <head-info
                  title="我的应用总计"
                  content="10个"
                  :bordered="true"
                />
              </a-col>
              <a-col
                :sm="8"
                :xs="24"
              >
                <head-info
                  title="已启动"
                  content="8个"
                  :bordered="true"
                />
              </a-col>
              <a-col
                :sm="8"
                :xs="24"
              >
                <head-info
                  title="未启动/异常"
                  content="2个"
                />
              </a-col>
            </a-row>
          </a-card>

          <a-card
            style="margin-top: 24px"
            :bordered="false"
            title="应用"
          >

            <div slot="extra">
              <a-radio-group>
                <a-radio-button>全部</a-radio-button>
                <a-radio-button>运行中</a-radio-button>
                <a-radio-button>异常/未启动</a-radio-button>
              </a-radio-group>
              <a-input-search style="margin-left: 16px; width: 272px;" />
            </div>

            <div class="operate">
              <a-button
                type="dashed"
                style="width: 100%"
                icon="plus"
              >添加</a-button>
            </div>

            <a-list
              size="large"
              :pagination="{showSizeChanger: true, showQuickJumper: true, pageSize: 5, total: 50}"
            >
              <a-list-item
                :key="index"
                v-for="(item, index) in data"
              >
                <a-list-item-meta :description="item.description">
                  <a-avatar
                    slot="avatar"
                    size="large"
                    shape="square"
                    :src="item.avatar"
                  />
                  <a slot="title">{{ item.title }}</a>
                </a-list-item-meta>
                <div slot="actions">
                  <a>编辑</a>
                </div>
                <div slot="actions">
                  <a-dropdown>
                    <a-menu slot="overlay">
                      <a-menu-item><a>编辑</a></a-menu-item>
                      <a-menu-item><a>删除</a></a-menu-item>
                    </a-menu>
                    <a>更多
                      <a-icon type="down" /></a>
                  </a-dropdown>
                </div>
                <div class="list-content">
                  <div class="list-content-item">
                    <span>Owner</span>
                    <p>{{ item.owner }}</p>
                  </div>
                  <div class="list-content-item">
                    <span>开始时间</span>
                    <p>{{ item.startAt }}</p>
                  </div>
                  <div class="list-content-item">
                    <a-progress
                      :percent="item.progress.value"
                      :status="!item.progress.status ? null : item.progress.status"
                      style="width: 180px"
                    />
                  </div>
                </div>
              </a-list-item>
            </a-list>

          </a-card>
        </div>

      </a-col>
    </a-row>

    <org-modal
      ref="modal"
      @ok="handleSaveOk"
      @close="handleSaveClose"
    />
  </a-card>
</template>

<script>
import STree from '@/components/Tree/Tree'
import OrgModal from './modules/OrgModal'
import { getAppTree } from '@/api/manage'
import HeadInfo from '@/components/tools/HeadInfo'

const data = []
data.push({
  title: 'Alipay',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
  description: '那是一种内在的东西， 他们到达不了，也无法触及的',
  owner: '付晓晓',
  startAt: '2018-07-26 22:44',
  progress: {
    value: 90
  }
})
data.push({
  title: 'Angular',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
  description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  owner: '曲丽丽',
  startAt: '2018-07-26 22:44',
  progress: {
    value: 54
  }
})
data.push({
  title: 'Ant Design',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
  description: '生命就像一盒巧克力，结果往往出人意料',
  owner: '林东东',
  startAt: '2018-07-26 22:44',
  progress: {
    value: 66
  }
})
data.push({
  title: 'Ant Design Pro',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
  description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  owner: '周星星',
  startAt: '2018-07-26 22:44',
  progress: {
    value: 30
  }
})
data.push({
  title: 'Bootstrap',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
  description: '那时候我只会想自己想要什么，从不想自己拥有什么',
  owner: '吴加好',
  startAt: '2018-07-26 22:44',
  progress: {
    status: 'exception',
    value: 100
  }
})

export default {
  name: 'AppList',
  components: {
    STree,
    OrgModal,
    HeadInfo
  },
  data () {
    return {
      openKeys: ['key-01', 'key-02', 'key-02-03'],

      // 查询参数
      queryParam: {},
      appTree: [],
      selectedRowKeys: [],
      selectedRows: [],
      data
    }
  },
  created () {
    getAppTree().then(res => {
      this.appTree = res.result
    })
  },
  methods: {
    handleClick (e) {
      console.log('handleClick', e)
      this.queryParam = {
        key: e.key
      }
      this.$refs.table.refresh(true)
    },
    handleAdd (item) {
      console.log('add button, item', item)
      this.$message.info(`提示：你点了 ${item.key} - ${item.title} `)
      this.$refs.modal.add(item.key)
    },
    handleTitleClick (item) {
      console.log('handleTitleClick', item)
    },
    titleClick (e) {
      console.log('titleClick', e)
    },
    handleSaveOk () { },
    handleSaveClose () { },

    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    }
  }
}
</script>

<style lang="less">
.custom-tree {
  /deep/ .ant-menu-item-group-title {
    position: relative;
    &:hover {
      .btn {
        display: block;
      }
    }
  }

  /deep/ .ant-menu-item {
    &:hover {
      .btn {
        display: block;
      }
    }
  }

  /deep/ .btn {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    width: 20px;
    height: 40px;
    line-height: 40px;
    z-index: 1050;

    &:hover {
      transform: scale(1.2);
      transition: 0.5s all;
    }
  }
}

.ant-avatar-lg {
  width: 48px;
  height: 48px;
  line-height: 48px;
}

.list-content-item {
  color: rgba(0, 0, 0, 0.45);
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  margin-left: 40px;
  span {
    line-height: 20px;
  }
  p {
    margin-top: 4px;
    margin-bottom: 0;
    line-height: 22px;
  }
}
</style>
