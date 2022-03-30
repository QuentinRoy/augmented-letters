import { Coordinate } from "./utils.js";

export type ALRecognizerArguments = {
  gesture: Array<Coordinate>;
  isComplete: boolean;
};
export type SuccessfulRecognition = {
  // Indicates if the recognition was successful. Since this type defines
  // successful results, it should be true.
  isSuccessful: true;
  // The selection of the recognized gesture. This the path defined with
  // group and item ids to reach the selection. For example, if the
  // the item "smile" from the group "s" has been selected, this would be
  // ["s", "smile"].
  selection: Array<string>;
  // Indicates if the selected item is a leaf or contains sub-items.
  isComplete: boolean;
};
export type FailedRecognition = { isSuccessful: false };

function recognize({
  gesture,
  isComplete,
}: ALRecognizerArguments): SuccessfulRecognition | FailedRecognition {
  if (gesture.length === 0) {
    return { isSuccessful: false };
  }
  if (isComplete) {
    // This should either return a failed result, or a complete selection.
    return {
      isSuccessful: true,
      selection: ["s", "smile"],
      isComplete: true,
    };
  }
  return {
    isSuccessful: true,
    selection: ["s"],
    isComplete: false,
  };
}

export default recognize;

export type ALRecognizer = typeof recognize;
