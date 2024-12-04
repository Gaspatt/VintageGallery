import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    login(email, password) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        this.user = { email };
        return true;
      }
      return false;
    },
    register(email, password) {
      const user = { email, password };
      localStorage.setItem('user', JSON.stringify(user));
      this.user = { email };
      return true;
    },
    logout() {
      this.user = null;
    },
  },
});
