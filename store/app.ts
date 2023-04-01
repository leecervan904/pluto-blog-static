export const useAppConfigStore = defineStore({
  id: 'app/config',
  state: () => ({
    darkMode: false,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      document.documentElement.setAttribute('theme', this.darkMode ? 'dark' : 'light')
      document.documentElement.setAttribute('class', this.darkMode ? 'dark' : '')
    },
  },
})
