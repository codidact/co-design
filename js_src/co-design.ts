import Toggle from "./toggle.js";
import Dismiss from "./dismiss.js";
import Header from "./header.js";
import DropPanel from "./droppanel.js";
import { Modal, ModalToggle } from "./modal.js";

const toggles = Toggle.find("[data-toggle]");
const dismiss = Dismiss.find("[data-dismiss]");
const modals = ModalToggle.find("[data-modal]");
const drops = DropPanel.find("[data-drop]");
Header.apply();

const delegated = {
    'toggle': [Toggle, toggles],
    'dismiss': [Dismiss, dismiss],
    'modal': [ModalToggle, modals],
    'drop': [DropPanel, drops]
};
document.addEventListener('click', ev => {
   const target: HTMLElement = ev.target as HTMLElement;
   Object.keys(delegated).forEach(key => {
      if (target.hasAttribute(`data-${key}`)) {
          const existing = delegated[key][1].filter(x => x.element === target);
          if (existing.length === 0) {
              delegated[key][1].push(new delegated[key][0](target));
              const redispatch = new MouseEvent(ev.type, ev);
              target.dispatchEvent(redispatch);
          }
      }
   });
});
