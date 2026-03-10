import { SnackPropTypes } from "@/legacy/snackbar/snack/snack";
import { useSnackbarStore } from '@/legacy/stores/useSnackbarStore';

export const useSnackbar = () => {
  const snackStore = useSnackbarStore();

  const showSnackbar = (payload: SnackPropTypes) => {
    snackStore.message(payload);
  }

  const showSuccess = (payload: SnackPropTypes) => {
    snackStore.message({ ...payload, tone: "success"});
  }

  const showInformation = (payload: SnackPropTypes) => {
    snackStore.message({ ...payload, tone: "information"});
  }

  const showDanger = (payload: SnackPropTypes) => {
    snackStore.message({ ...payload, tone: "danger"});
  }

  const showCaution = (payload: SnackPropTypes) => {
    snackStore.message({ ...payload, tone: "caution"});
  }

  return {
    showSnackbar,
    showSuccess,
    showInformation,
    showDanger,
    showCaution,
  }
}
