<template>
  <div class="home">
    <div class="home">
      <v-card>
        <v-toolbar
          color="#3794df"
          dark
          fixed
        >
          <v-text-field
            append-icon="mic"
            type="search"
            class="mt-2"
            v-model="value"
            @keydown.enter="handleSearch"
            flat
            label="请输入客户姓名或编号"
            prepend-inner-icon="search"
            solo-inverted
          ></v-text-field>
        </v-toolbar>
        <v-list
          three-line
          style="padding-top:56px"
        >
          <template v-for="(item, index) in items">
            <v-divider :key="index"></v-divider>

            <v-list-tile
              :key="item.id"
              avatar
            >
              <v-list-tile-avatar>
                <div
                  class="my-avatar"
                  :style="'background-color:' + item.avatar.bgColor + ';'"
                >
                  {{ item.avatar.text }}
                </div>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title style="height: 32px;line-height:32px;">
                  {{ item.name }}

                  <v-chip
                    small
                    color="blue"
                    text-color="white"
                  >{{ item.type }}类</v-chip>
                  <v-chip
                    small
                    color="green"
                    text-color="white"
                  >{{
                    item.channel
                    }}</v-chip>
                </v-list-tile-title>
                <v-list-tile-sub-title>{{ item.desc }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
      <div class="text-xs-center my-3">
        <v-progress-circular
          indeterminate
          color="green"
        ></v-progress-circular>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      items: [
        {
          id: '1111',
          avatar: { bgColor: 'red', text: '潜在' },
          name: '李阳鸣',
          type: 'A',
          channel: '网络渠道',
          status: '已签',
          time: '2018-9-9',
          desc:
            '360人工单 到噶啦噶；方法开发开发开发开发开发的嘎嘎反反复复反反复复'
        },
        {
          id: '22222',
          avatar: { bgColor: 'red', text: '潜在' },
          name: '李阳鸣',
          type: 'A',
          channel: '网络渠道',
          status: '已签',
          time: '2018-9-9',
          desc:
            '360人工单 到噶啦噶；方法开发开发开发开发开发的嘎嘎反反复复反反复复'
        },
        {
          id: '3333',
          avatar: { bgColor: 'red', text: '潜在' },
          name: '李阳鸣',
          type: 'A',
          channel: '网络渠道',
          status: '已签',
          time: '2018-9-9',
          desc:
            '360人工单 到噶啦噶；方法开发开发开发开发开发的嘎嘎反反复复反反复复'
        },
        {
          id: '4444',
          avatar: { bgColor: 'red', text: '潜在' },
          name: '李阳鸣',
          type: 'A',
          channel: '网络渠道',
          status: '已签',
          time: '2018-9-9',
          desc:
            '360人工单 到噶啦噶；方法开发开发开发开发开发的嘎嘎反反复复反反复复'
        },
        {
          id: '5555',
          avatar: { bgColor: 'red', text: '潜在' },
          name: '李阳鸣',
          type: 'A',
          channel: '网络渠道',
          status: '已签',
          time: '2018-9-9',
          desc:
            '360人工单 到噶啦噶；方法开发开发开发开发开发的嘎嘎反反复复反反复复'
        },
        {
          id: '66666',
          avatar: { bgColor: 'red', text: '潜在' },
          name: '李阳鸣',
          type: 'A',
          channel: '网络渠道',
          status: '已签',
          time: '2018-9-9',
          desc:
            '360人工单 到噶啦噶；方法开发开发开发开发开发的嘎嘎反反复复反反复复'
        },
        {
          id: '7777',
          avatar: { bgColor: 'red', text: '潜在' },
          name: '李阳鸣',
          type: 'A',
          channel: '网络渠道',
          status: '已签',
          time: '2018-9-9',
          desc:
            '360人工单 到噶啦噶；方法开发开发开发开发开发的嘎嘎反反复复反反复复'
        },
        {
          id: '8888',
          avatar: { bgColor: 'red', text: '潜在' },
          name: '李阳鸣',
          type: 'A',
          channel: '网络渠道',
          status: '已签',
          time: '2018-9-9',
          desc:
            '360人工单 到噶啦噶；方法开发开发开发开发开发的嘎嘎反反复复反反复复'
        }
      ]
    }
  },
  methods: {
    handleSearch () {
      alert(this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-avatar {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  color: #fff;
}
</style>
