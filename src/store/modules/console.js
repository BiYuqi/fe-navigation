import { storage } from '../../helper/storage'
import { FE_THEME, FE_SEARCH, FE_IFRAME } from './console-types'

const state = {
  [FE_THEME]: storage.get(FE_THEME) === 'true',
  [FE_SEARCH]: storage.get(FE_SEARCH) === 'true',
  [FE_IFRAME]: storage.get(FE_IFRAME) === 'true'
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
