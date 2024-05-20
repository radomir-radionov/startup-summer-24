'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

type TModalProps = {
  name: string;
  props: Record<string, any>;
};

type TModalContext = {
  modal: TModalProps | null;
  openModal: (name: string, props?: Record<string, any>) => void;
  closeModal: () => void;
};

const defaultModalContext: TModalContext = {
  modal: null,
  openModal: () => {},
  closeModal: () => {},
};

const ModalContext = createContext<TModalContext>(defaultModalContext);

const ModalProvider = ({ children }: TProps) => {
  const [modal, setModal] = useState<TModalProps | null>(null);

  const openModal = (name: string, props: Record<string, any> = {}) =>
    setModal({ name, props });

  const closeModal = () => setModal(null);

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModal = () => useContext(ModalContext);
