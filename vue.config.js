const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      styles: { configFile: 'src/assets/style/settings.scss' }
		}
  }
})
