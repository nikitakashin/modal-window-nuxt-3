import { DirectiveBinding, ObjectDirective } from 'vue';

interface IClickOutsideHandler {
  (e: Event): void;
}

interface HTMLElementExtended extends HTMLElement {
  __vClickOutside: IClickOutsideHandler | null;
}

export const vClickOutside: ObjectDirective = {
  mounted: (el: HTMLElementExtended, binding: DirectiveBinding) => {
    const bubble = binding.modifiers.bubble;
    const handler: IClickOutsideHandler = (e) => {
      if (bubble || (!el.contains(e.target as Node) && el !== e.target)) {
        binding.value(e);
      }
    };
    el.__vClickOutside = handler;

    setTimeout(() => {
      document.addEventListener('click', handler);
    }, 0);
  },

  beforeUnmount: (el: HTMLElementExtended) => {
    if (el.__vClickOutside) {
      document.removeEventListener('click', el.__vClickOutside);
      el.__vClickOutside = null;
    }
  }
};
