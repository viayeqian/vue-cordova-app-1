import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

const requireContext = requireContext =>
  requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireContext(req)
