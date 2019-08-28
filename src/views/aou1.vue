<<!----------Make By YourName---------------->
 <template>
<div>
    <v-layout column justify-center align-center>
        <v-card class style="margin-top:5%; width:70%;">
            <v-toolbar color="amber darken-3" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Information Board</v-toolbar-title>

          <div class="flex-grow-1"></div>

          <v-btn icon>
            <v-icon>mdi-file-document-box-plus</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              inset
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              inset
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
              ripple
              
            >
              <v-list-item-avatar>
                <img :src="item.avatar">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            </template>
        </v-list>
       </v-card>
    </v-layout>
    </div>
</template>

    <script>
export default {
    data () {
      return {
        items: [
          {
            header: 'Today',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=660',
            title: '',
            subtitle:
              "",
          },
          {
            avatar: 'https://picsum.photos/250/300?image=821',
            title: '',
            subtitle:
              "",
          },
          {
            avatar: 'https://picsum.photos/250/300?image=783',
            title: '',
            subtitle:
              "",
          },
          {
            header: 'Yesterday',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=1006',
            title: '',
            subtitle:
              "",
          },
          {
            avatar: 'https://picsum.photos/250/300?image=146',
            title: '',
            subtitle:
              "",
          },
          {
            header: 'Last Week',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=1008',
            title: '',
            subtitle:
              "",
          },
          {
            avatar: 'https://picsum.photos/250/300?image=839',
            title:
              ' ',
            subtitle:
              "",
          },
          {
            avatar: 'https://picsum.photos/250/300?image=145',
            title: '',
            subtitle:
              "",
          },
        ],
      }
    },
  }
</script>>