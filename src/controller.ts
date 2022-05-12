import { Observable } from "rxjs";
import Recognizer from "./recognizer.js";
import { Coordinate, Definition } from "./utils.js";

export type InputParams = {
  menu: Definition;
  recognizer: Recognizer;
  node: HTMLElement;
};

export type Instruction =
  | { type: "start"; position: Coordinate }
  | { type: "stroke"; position: Coordinate; stroke: Array<Coordinate> }
  | { type: "open-menu"; position: Coordinate }
  | { type: "hover-menu"; position: Coordinate; menuCenter: Coordinate }
  | { type: "show-guide" }
  | { type: "recognition-error" }
  | { type: "select"; position: Coordinate };

export default function controller(
  params: InputParams,
): Observable<Instruction>;
export default function controller(): Observable<Instruction> {
  throw new Error("Not implemented");
}
