import type { Observer } from "rxjs";
import { Instruction } from "./controller.js";
import { Definition } from "./utils.js";

type GraphicsParams = {
  node: HTMLElement;
  menu: Definition;
};


export default function graphics(params: GraphicsParams): Observer<Instruction> {
  return {
    next: (instruction) => {
      console.log(instruction);
    },
    error: (error) => {
      console.error(error);
    },
    complete: () => {
      console.log("complete");
    },
  };
}
