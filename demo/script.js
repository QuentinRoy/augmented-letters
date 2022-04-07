const { AugmentedLetters } = window;

let menu = [
  {
    id: "s",
    gesture: "s",
    items: [
      { id: "smile", label: "Smile", angle: 0 },
      { id: "search", label: "Search", angle: 180 },
      { id: "select", label: "Select", angle: 270 },
      {
        id: "others",
        label: "Others...",
        angle: 90,
        items: [
          { id: "save", label: "Save", angle: 0 },
          { id: "save-as", label: "Save As...", angle: 180 },
          { id: "start", label: "Save", angle: 90 },
        ],
      },
    ],
  },
  {
    id: "c",
    gesture: "c",
    items: [
      { id: "copy", label: "Copy", angle: 0 },
      { id: "cut", label: "Cut", angle: 90 },
      { id: "clear", label: "Clear", angle: 180 },
    ],
  },
];

let al = AugmentedLetters({ node: document.body, menu });
