import { ALRecognizer } from "./recognizer.js";
import { ALDefinition } from "./utils.js";

type ALOptions = { menu: ALDefinition; recognizer: ALRecognizer };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function create(_opts: ALOptions): void {
  throw new Error("Not implemented");
}
