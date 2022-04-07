import StateMachine from "javascript-state-machine";

export default StateMachine.factory({
  init: "idle",
  transitions: [
    { name: "start", from: "idle", to: "gesture" },
    { name: "pause", from: "gesture", to: "menu" },
    { name: "pause", from: "idle", to: "menu" },
    { name: "end", from: "gesture", to: "idle" },
    { name: "end", from: "menu", to: "idle" },
  ],
});
