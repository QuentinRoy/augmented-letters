import { tap } from "rxjs/operators";
import mitt from "mitt";
import graphics from "./graphics.js";
import controller from "./controller.js";
import Recognizer from "./recognizer.js";
import emitEvents, {
  ALEventEmitter,
  ALEvents,
} from "./user-input-to-events.js";
import { Definition } from "./utils.js";

type Params = {
  menu: Definition;
  node: HTMLElement;
  recognizer?: Recognizer;
};

type AugmentedLetter = {
  remove: () => void;
  readonly menu: Definition;
  readonly node: HTMLElement;
  on: ALEventEmitter["on"];
  off: ALEventEmitter["off"];
};

export default function create({
  menu,
  node,
  recognizer = Recognizer(menu),
}: Params): AugmentedLetter {
  const observer$ = controller({ menu, recognizer, node }).pipe(
    tap(graphics({ menu, node })),
  );
  const emitter = mitt<ALEvents>();
  let subscription = observer$.subscribe(emitEvents(emitter));

  return {
    on: emitter.on.bind(emitter),
    off: emitter.off.bind(emitter),
    remove: () => {
      subscription.unsubscribe();
    },
    node,
    menu,
  };
}
