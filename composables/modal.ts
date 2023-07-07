import { Component, markRaw, Raw } from 'vue';
import ModalTemplateNotify from '@/components/modal/template/ModalTemplateNotify.vue';
import ModalTemplateQuestion from '@/components/modal/template/ModalTemplateQuestion.vue';

interface IModalComponents {
  [name: string]: Component;
}

export const modalComponents: IModalComponents = {
  notify: ModalTemplateNotify,
  question: ModalTemplateQuestion
};

export interface IModal {
  id: string;
  props: IModalProps;
  component: Raw<Component>;
}

export interface IModalProps {
  id?: string;
  title?: string;
  subtitle?: string;
  text?: string;
  noClosable?: boolean;
  icon?: string;
  autoClose?: boolean;
  autoTimer?: number;
  additional?: any;
}

export const useModalStore = () => useState<IModal[]>('modals', () => []);
let nextModalId = 1;

interface IUseModal {
  (): {
    show: (component: Component, props: IModalProps, id?: string) => string;
    hide: (id: string) => void;
  };
}

export const useModal: IUseModal = () => {
  const modalStore = useModalStore();

  return {
    show: (component, props, id = nextModalId.toString()) => {
      nextModalId += 1;
      const rawComponent = markRaw(component);
      modalStore.value.push({ component: rawComponent, props, id });
      return id;
    },
    hide: (id) => {
      modalStore.value = modalStore.value.filter((modal) => {
        return modal.id !== id;
      });
    }
  };
};
