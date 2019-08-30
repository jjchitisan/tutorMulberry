<!----------Make By YourName---------------->
 <template>
<div class="container">

    <v-layout row wrap justify-center align-center>
        <form @submit.prevent="(form.id)?update(form.id):insert()">
            <v-text-field label="Name" v-model="form.name"></v-text-field>
            <v-text-field label="discription" v-model="form.discription"></v-text-field>
            <v-text-field label="price" v-model="form.price"></v-text-field>
            <VSelect :items="[1,2]" v-model="form.status" label="ประเภท"></VSelect>
            <v-btn type="submit" :color="(form.id)?'orange':'success'">{{(form.id)?'update':'Insert'}}</v-btn>
        </form>

        <v-flex xs12>
            <v-tabs>
                <v-tab>
                    <h1>ลง</h1>
                </v-tab>
                <v-tab-item>
                    <table style="width:100%;">
                        <tr>
                            <th>ชื่อ</th>
                            <th>รายละเอียด</th>
                            <th>ราคา</th>
                            <th>ลบ</th>
                            <th>แก้ไข</th>
                        </tr>
                        <tr v-for="sub,index in subject" :key="index" v-if="sub.status == 1">
                            <td> {{sub.name}}</td>
                            <td>{{sub.discription}}</td>
                            <td>{{sub.price}}</td>
                            <td>
                                <v-btn @click="deletes(sub.id)" color="red">Delete</v-btn>
                            </td>
                            <td>
                                <v-btn @click="form = sub" color="orange">update</v-btn>
                            </td>
                        </tr>
                    </table>
                </v-tab-item>
                <v-tab>
                    <h1>ประกาศหา</h1>
                </v-tab>
                <v-tab-item>
                    <table style="width:100%;">
                        <tr>
                            <th>ชื่อ</th>
                            <th>รายละเอียด</th>
                            <th>ราคา</th>
                            <th>ลบ</th>
                            <th>แก้ไข</th>
                        </tr>
                        <tr v-for="sub,index in subject" :key="index" v-if="sub.status == 2">

                            <td>{{sub.name}}</td>
                            <td>{{sub.discription}}</td>
                            <td>{{sub.price}}</td>
                            <td>
                                <v-btn @click="deletes(sub.id)" color="red">Delete</v-btn>
                            </td>
                            <td>
                                <v-btn @click="form = sub" color="orange">update</v-btn>
                            </td>
                        </tr>
                    </table>
                </v-tab-item>
            </v-tabs>

        </v-flex>
    </v-layout>
</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: "Root",
    /*-------------------------Load Component---------------------------------------*/
    components: {},
    /*-------------------------Set Component---------------------------------------*/
    props: {},
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {};
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
    async mounted() {
        /**** Call loading methods*/
        this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next();
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {
        ...sync("test/*")
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call("test/*"),
        /******* Methods default run ******/
        load: async function () {
            await this.getData();
        }
    }
};
</script>

<style>
table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
}
</style>
