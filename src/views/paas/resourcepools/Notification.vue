<template>
  <a-row>
    <a-col :span="4">

      <a-steps
        direction="vertical"
        size="small"
        :current="1"
        status="error"
      >
        <a-step
          title="docker"
          description=""
        />
        <a-step
          title="etcd"
          description=""
        />
        <a-step
          title="kubernetes"
          description=""
        />
      </a-steps>
    </a-col>
    <a-col :span="20">

      <div style="background:#ECECEC; padding:30px">
        <a-card
          title="Console Log:"
          :bordered="false"
          style="width: 100%"
        >
          <span
            v-for="(item, index) in getLogs"
            :key="index"
          >
            {{ item.text }}
            <br />
          </span>

        </a-card>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import Stomp from 'stompjs'
export default {
  name: 'ConsoleLog',
  data () {
    return {
      getLogs: [{ text: '>' }, { text: '>' }, { text: '>' }, { text: '>' }, { text: '>' }, { text: '>' }, { text: '>' }],
      client: null,
      getBody: null
    }
  },
  methods: {
    onConnected (frame) {
      console.log('Connected: ' + frame)
      const topic = '/topic/collection_info'
      this.client.subscribe(topic, this.responseCallback, this.onFailed)
    },
    onFailed (frame) {
      console.log('Failed: ' + frame)
    },
    responseCallback (frame) {
      console.log('得到的消息 msg=>' + frame.body)
      this.getBody = {
        text: frame.body
      }
      this.getLogs.push(this.getBody)
    },
    connect () {
      this.client = Stomp.client('ws://132.252.128.107:38099/monitor-websocket')
      var headers = {
        'login': 'admin',
        'passcode': 'admin',
        'client-id': '1'
        // additional header
      }
      this.client.connect(headers, this.onConnected, this.onFailed)
    }
  },
  mounted () {
    this.connect()
  }
}

</script>

<style scoped>
</style>
