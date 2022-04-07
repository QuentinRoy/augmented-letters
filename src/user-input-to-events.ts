import { Emitter } from "mitt";
import { Observer } from "rxjs";
import { Instruction } from "./controller.js";

export type ALEvents = {
  selection: { type: "selection" };
  error: { type: "error" };
};

export type ALEventEmitter = Emitter<ALEvents>;

export default function emitEvents(
  emitter: ALEventEmitter,
): Observer<Instruction>;
export default function emitEvents(): Observer<Instruction> {
  throw new Error("Not implemented");
}
