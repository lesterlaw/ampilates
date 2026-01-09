"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface WhatsAppContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(undefined);

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <WhatsAppContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsApp() {
  const context = useContext(WhatsAppContext);
  if (context === undefined) {
    throw new Error("useWhatsApp must be used within a WhatsAppProvider");
  }
  return context;
}
