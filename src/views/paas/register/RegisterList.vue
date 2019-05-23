<template>
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
            <a-icon type="plus" />
            新增仓库
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
                size="small"
              />
              <div
                class="meta-cardInfo"
                slot="description"
              >
                <div>
                  <p>Images</p>
                  <p>
                    <span>{{ item.activeUser }}<span>万</span></span>
                  </p>
                </div>
                <div>
                  <p>Helm Charts</p>
                  <p>{{ item.newUser | NumberFormat }}</p>
                </div>
                <div style="width: 25%; font-size: 12px;margin-top: 10px">
                  利用率:
                </div>
                <div style="width: 75%; margin-top: 5px">
                  <a-progress :percent="90" size="small" strokeColor="red" />
                </div>
              </div>
            </a-card-meta>
            <template
              class="ant-card-actions"
              slot="actions"
            >
              <a>
                <a-icon type="download" />
              </a>
              <a>
                <a-icon type="edit" />
              </a>
              <a>
                <a-icon type="share-alt" />
              </a>
              <a>
                <a-dropdown>
                  <a
                    class="ant-dropdown-link"
                    href="javascript:;"
                  >
                    <a-icon type="ellipsis" />
                  </a>
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a href="javascript:;">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">3rd menu item</a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </a>
            </template>
          </a-card>
        </template>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>

const dataSource = []
dataSource.push(null)
for (let i = 0; i < 11; i++) {
  dataSource.push({
    title: 'Harbor',
    avatar: '/logo.png',
    activeUser: 17,
    newUser: 1700
  })
}

export default {
  name: 'RegisterList',
  data () {
    return {
      description: '支持docker register v2及harbor仓库。',
      linkList: [
        { icon: 'rocket', href: '#', title: '快速开始' },
        { icon: 'info-circle-o', href: '#', title: '产品简介' },
        { icon: 'file-text', href: '#', title: '产品文档' }
      ],
      extraImage: 'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
      dataSource
    }
  }
}
</script>

<style lang="less" scoped>
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
  height: 215px;
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

  .card-list {

    .meta-cardInfo {
      zoom: 1;
      margin-top: 16px;

      > div {
        position: relative;
        text-align: left;
        float: left;
        width: 50%;

        p {
          line-height: 32px;
          font-size: 24px;
          margin: 0;

          &:first-child {
            color: rgba(0, 0, 0, .45);
            font-size: 12px;
            line-height: 20px;
            margin-bottom: 4px;
          }
        }

      }
    }
  }
</style>
