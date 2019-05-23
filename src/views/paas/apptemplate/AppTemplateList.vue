<template>
  <a-card :bordered="false">
    <a-row :gutter="8">
      <a-col :span="5">
        <s-tree
          :dataSource="appTemplateTree"
          :openKeys.sync="openKeys"
          :search="true"
          @click="handleClick"
          @add="handleAdd"
          @titleClick="handleTitleClick"
        ></s-tree>
      </a-col>
      <a-col :span="19">
        <div
          class="card-list"
          ref="content"
        >
          <a-list
            :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
            :dataSource="dataSource"
          >
            <a-list-item
              slot="renderItem"
              slot-scope="item"
            >
              <template v-if="item === null">
                <a-button
                  class="new-btn"
                  type="dashed"
                >
                  <a-icon type="plus" />新增模板
                </a-button>
              </template>
              <template v-else>
                <a-card :hoverable="true">
                  <a-card-meta>
                    <div
                      style="margin-bottom: 3px"
                      slot="title"
                    >{{ item.title }}</div>
                    <a-avatar
                      class="card-avatar"
                      slot="avatar"
                      :src="item.avatar"
                      size="large"
                    />
                    <div
                      class="meta-content"
                      slot="description"
                    >{{ item.content }}</div>
                  </a-card-meta>
                  <template
                    class="ant-card-actions"
                    slot="actions"
                  >
                    <a>详情</a>
                    <a>使用</a>
                  </template>
                </a-card>
              </template>
            </a-list-item>
          </a-list>
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
import { getAppTemplateTree } from '@/api/manage'

const dataSource = []
dataSource.push(null)
for (let i = 0; i < 11; i++) {
  dataSource.push({
    title: 'kubernetes',
    avatar: '/logo.png',
    content:
      'Kubernetes是Google开源的一个容器编排引擎，它支持自动化部署、大规模可伸缩、应用容器化管理。'
  })
}

export default {
  name: 'AppTemplateList',
  components: {
    STree,
    OrgModal
  },
  data () {
    return {
      openKeys: ['key-01', 'key-02', 'key-02-03'],

      // 查询参数
      queryParam: {},
      appTemplateTree: [],
      selectedRowKeys: [],
      selectedRows: [],
      dataSource
    }
  },
  created () {
    getAppTemplateTree().then(res => {
      this.appTemplateTree = res.result
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

.card-avatar {
  width: 48px;
  height: 48px;
  border-radius: 48px;
}

.ant-card-actions {
  background: #f7f9fa;
  li {
    float: left;
    text-align: center;
    margin: 12px 0;
    color: rgba(0, 0, 0, 0.45);
    width: 50%;

    &:not(:last-child) {
      border-right: 1px solid #e8e8e8;
    }

    a {
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
      display: inline-block;
      width: 100%;
      &:hover {
        color: #1890ff;
      }
    }
  }
}

.new-btn {
  background-color: #fff;
  border-radius: 2px;
  width: 100%;
  height: 188px;
}

.meta-content {
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  height: 64px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
