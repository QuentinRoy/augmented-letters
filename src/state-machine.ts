import StateMachine from "javascript-state-machine";

export default StateMachine.factory({
  init: "idle",
  transitions: [
    { name: "start", from: "idle", to: "stroke" },
    { name: "open-menu", from: "stroke", to: "menu" },
    { name: "open-menu", from: "idle", to: "menu" },
    { name: "end", from: "stroke", to: "idle" },
    { name: "end", from: "menu", to: "idle" },
  ],
});
