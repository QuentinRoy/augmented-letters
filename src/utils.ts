/**
 * For example:
 *  [
 *    {
 *      id: "s",
 *      gesture: "s",
 *      items: [
 *       { id: "smile", label: "Smile", angle: 0 },
 *       { id: "select", label: "Select", angle: 90 },
 *       { id: "search", label: "Search", angle: 180 },
 *       { id: "save", label: "Save", angle: 270 },
 *      ]
 *    },
 *    {
 *      id: "c",
 *      gesture: "c",
 *      items: [
 *       { id: "copy", label: "Copy", angle: 0 },
 *       { id: "cut", label: "Cut", angle: 90 },
 *       { id: "clear", label: "Clear", angle: 180 },
 *       // The gesture c and and angle 270 is in conflict with the gesture g.
 *      ]
 *    }
 *  ]
 */
export type Definition = Array<DefinitionGroup>;
export type DefinitionGroup = {
  // The id of the group, also used to identify the corresponding gesture.
  id: string;
  gesture: string;
  items: Array<DefinitionItem>;
};
export type DefinitionItem = {
  id: string;
  label: string;
  angle: number;
  // Allows for multi-level. However, it is usually not recommended to build a
  // hierarchy. The preferred way to use this is to use a special direction
  // labeled "other" to specify the rest of the items.
  items?: Array<DefinitionItem>;
};

export type Coordinate = [number, number];
