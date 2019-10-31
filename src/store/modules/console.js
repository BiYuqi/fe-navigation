import { storage } from '../../helper/storage'

const state = {
  theme: storage.get('theme') === 'true',
  search: storage.get('search') === 'true',
  iframe: storage.get('iframe') === 'true'
}

const mutations = {
  setFeature (state, { type, status }) {
    state[type] = status
    storage.set(type, status)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
