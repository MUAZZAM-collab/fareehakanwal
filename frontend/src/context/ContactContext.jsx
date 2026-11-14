import React, { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('O Level Inquiry');
  const [toast, setToast] = useState(null); // { message: '', type: 'success' | 'error' }

  const openContactModal = (subject = 'O Level Inquiry') => {
    setSelectedSubject(subject);
    setIsModalOpen(true);
  };

  const closeContactModal = () => {
    setIsModalOpen(false);
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  return (
    <ContactContext.Provider
      value={{
        isModalOpen,
        openContactModal,
        closeContactModal,
        selectedSubject,
        setSelectedSubject,
        toast,
        showToast,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
}
