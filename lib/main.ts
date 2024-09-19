import TheButton from "../src/components/TheButton.vue";
import TheInput from "../src/components/TheInput.vue";

// export default { TheButton, TheInput };

export default {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  install: (app: any) => {
    app.components("ds-button", TheButton);
    app.components("ds-input", TheInput);
  },
};
