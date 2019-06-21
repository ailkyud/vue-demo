<template>
  <div>
    <a-card
      class="project-list"
      :loading="loading"
      style="margin-bottom: 24px;"
      :bordered="false"
      title="redis数据读取推送前端项目"
      :body-style="{ padding: 0 }"
    >
      <a slot="extra">全部团队</a>
      <div>
        <a-card-grid
          class="project-card-grid"
          :key="i"
          v-for="(item, i) in teamData"
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
                  src="/logo.png"
                />
                <a>第{{ i+1 }}组</a>
              </div>
              <div
                slot="description"
                class="card-description"
              >
                <a-carousel
                  vertical
                  autoplay
                >
                  <div
                    v-for="(it, idx) in item.content"
                    :key="idx"
                  >
                    {{ it }}
                  </div>
                </a-carousel>
              </div>
            </a-card-meta>
          </a-card>
        </a-card-grid>
      </div>
    </a-card>
  </div>
</template>

<script>
const teamUrlData = ['', '', '', '', '', '', '', '', '', '', '', '']
const teamData = []
for (let i = 0; i < 12; i++) {
  teamData.push({
    url: teamUrlData[i],
    path: '/kafka/kafkaConsumerMsg', // '/list/search/practisedata',
    content: ['暂无记录']
  })
}
export default {
  name: 'Docker',
  data () {
    return {
      timer: '',
      loading: true,
      radarLoading: true,
      teamData
    }
  },
  mounted () {
    this.getProjects()
    this.timer = setInterval(this.getProjects, 60000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    getProjects () {
      for (let i = 0; i < teamData.length; i++) {
        this.$http.get(teamData[i].url + teamData[i].path)
          .then(res => {
            if (res.code === 1) {
              teamData[i].content = res.data
            } else {
              teamData[i].content = ['暂无数据']
            }
          })
      };
      this.loading = false
    }
  }
}
</script>

<style lang="less" scoped>
.project-list {
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
    height: 70px;
    line-height: 22px;
    overflow: hidden;
    border: 1em solid transparent;
    border-image: url(/border1.png) 27 27 27 27 round;
    -webkit-border-image: url(/border1.png) 27 27 27 27 round;
    -moz-border-image: url(/border1.png) 27 27 27 27 round;
  }
  .project-item {
    display: flex;
    margin-top: 8px;
    overflow: hidden;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    a {
      color: rgba(0, 0, 0, 0.45);
      display: inline-block;
      flex: 1 1 0;

      &:hover {
        color: #1890ff;
      }
    }
    .datetime {
      color: rgba(0, 0, 0, 0.25);
      flex: 0 0 auto;
      float: right;
    }
  }
  .ant-card-meta-description {
    color: rgba(0, 0, 0, 0.45);
    height: 44px;
    line-height: 22px;
    overflow: hidden;
  }
}

.item-group {
  padding: 20px 0 8px 24px;
  font-size: 0;
  a {
    color: rgba(0, 0, 0, 0.65);
    display: inline-block;
    font-size: 14px;
    margin-bottom: 13px;
    width: 25%;
  }
}

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
</style>
