<template>
  <svg :class="iconClass">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    svgName: {
      type: String,
      required: true
    },
    svgClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.svgName}`
    },
    iconClass () {
      if (this.svgClass) {
        return 'svg-icon ' + this.svgClass
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
