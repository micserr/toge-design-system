import { defineStore } from "pinia";
import { SnackPropTypes } from "@/components/snackbar/snack/snack";
import { ref, type Ref } from "vue";

const createSnack = (payload: SnackPropTypes): SnackStoreTypes => ({
  ...payload,
  id: Math.random() * 1000,
});

export interface SnackStoreTypes extends SnackPropTypes {
  id: number,
  defaultAction?: () => void
}

export const useSnackbarStore = defineStore("snackbar-store", () => {
  const snacks: Ref<SnackStoreTypes[]> = ref([]);

  // Delete function for snacks
  const eatSnack = (snack: SnackStoreTypes) => {
    snacks.value = snacks.value.filter((s) => s.id !== snack.id);
  }

  const updateState = (payload: SnackPropTypes) => {
    const snack = createSnack(payload);

    // Add new snack to state array
    snacks.value.push({...snack, defaultAction: () => eatSnack(snack)});

    // At a certain duration, delete snack
    setTimeout(() => {
      eatSnack(snack);
    }, payload.duration || 4000);
  }

  const message = (payload: SnackPropTypes) => {
    updateState({ ...payload});
  }

  return {
    snacks,
    updateState,
    message,
  }
});
