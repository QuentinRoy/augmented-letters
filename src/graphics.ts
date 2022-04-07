import type { Observer } from "rxjs";
import { Instruction } from "./controller.js";
import { Definition } from "./utils.js";

type GraphicsParams = {
  node: HTMLElement;
  menu: Definition;
};

export default function graphics(params: GraphicsParams): Observer<Instruction>;
export default function graphics(): Observer<Instruction> {
  throw new Error("Not implemented");
}
