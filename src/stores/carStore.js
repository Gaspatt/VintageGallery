import { defineStore } from 'pinia';

export const useCarStore = defineStore('car', {
  state: () => ({
    selectedCar: null,
  }),
  actions: {
    selectCar(car) {
      this.selectedCar = car;
    },
  },
});
