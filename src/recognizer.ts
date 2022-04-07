import { Definition, Coordinate } from "./utils.js";

export type Output =
  | {
      // Indicates if the recognition was successful. Since this type defines
      // successful results, it should be true.
      isSuccessful: true;
      // The selection of the recognized gesture. This the path defined with
      // group and item ids to reach the selection. For example, if the
      // the item "smile" from the group "s" has been selected, this would be
      // ["s", "smile"].
      selection: Array<string>;
    }
  | { isSuccessful: false; error?: string };

export type Input = {
  stroke: Array<Coordinate>;
  isComplete: boolean;
};

type Recognizer = (input: Input) => Output;

const Recognizer =
  (menu: Definition): Recognizer =>
  (input: Input): Output => {
    let { stroke, isComplete } = input;
    if (stroke.length === 0) {
      return {
        isSuccessful: false,
        error: "Empty stroke",
      };
    } else if (isComplete) {
      // This should either return a failed result, or a complete selection.
      return {
        isSuccessful: true,
        selection: [menu[0].id, menu[0].items[0].id],
      };
    } else {
      return {
        isSuccessful: true,
        selection: [menu[0].id],
      };
    }
  };

export default Recognizer;
