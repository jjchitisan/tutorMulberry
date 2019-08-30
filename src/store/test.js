import axios from "../axios";
import _ from "lodash";
import { make } from "vuex-pathify";
import store from ".";

const state = {
    subject:[],
    form:{},
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
  async getData(context, params) {
      await axios.get('/api/subject')
      .then((r) => {
        state.subject = r.data;
      }).catch((e) => { 
      
       });
  },
  async insert(context, params) {
      state.form.user_id = 1;
    await axios.post('/api/subject',state.form)
    .then(async(r) => {
        alert('Insert Success');
        await actions.getData();
    }).catch((e) => { 
    
     });
  },

  async update(context, params) {
    await axios.put(`/api/subject/${params}`,state.form)
    .then(async(r) => {
        alert('Update Success');
        await actions.getData();
        state.form = {};
    }).catch((e) => { 
    
     });
  },

  async deletes(context, params) {
    await axios.delete(`/api/subject/${params}`)
    .then(async(r) => {
        alert('Delete Success');
        await actions.getData();
    }).catch((e) => { 
    
     });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
