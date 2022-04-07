import AugmentedLetters from "./main.js";

declare global {
  interface Window {
    AugmentedLetters: typeof AugmentedLetters;
  }
}

window.AugmentedLetters = AugmentedLetters;
