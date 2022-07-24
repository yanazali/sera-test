import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';
import store from '@/store/modules/auth';

Vue.use(Vuex);

const $storeInstance = new Vuex.Store(store);

describe('Vuex Store: Messages', () => {
  it('Cek login', () => {
    // const mockFetchPromise = Promise.resolve({
    //   data: messages,
    // });
    // axios.post = jest.fn().mockResolvedValueOnce(mockFetchPromise);
    // mengeksekusi actions lewat Vuex Instance
    $storeInstance.dispatch('login', { email: 'dummy-username', password: 'ddddd' });
    // mengecek perubahan state
    // expect($storeInstance.state.messages).toEqual(messages);
  });
});

