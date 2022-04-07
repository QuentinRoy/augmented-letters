import { Observable } from "rxjs";
import Recognizer from "./recognizer.js";
import { Definition } from "./utils.js";

export type InputParams = {
  menu: Definition;
  recognizer: Recognizer;
  node: HTMLElement;
};

export type Instruction = {
  type: "start" | "end" | "pause";
};

export default function controller(
  params: InputParams,
): Observable<Instruction>;
export default function controller(): Observable<Instruction> {
  throw new Error("Not implemented");
}
