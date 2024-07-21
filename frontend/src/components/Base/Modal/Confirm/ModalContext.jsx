import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import eventBus from '../../../../utils/eventBus';
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [options, setOptions] = useState({ btnDisagree: '', btnAgree: '' });
  const [agreeCallback, setAgreeCallback] = useState(() => {});
  const [disagreeCallback, setDisagreeCallback] = useState(() => {});

  /**
   * Open the confirm Modal.
   */
  const openModal = useCallback(
    ({
      title = 'Confirm',
      message = 'Are you sure want to perform this actions?',
      options = { btnDisagree: 'Disagree', btnAgree: 'Agree' },
      agree = () => {},
      disagree = () => {},
    }) => {
      setTitle(title);
      setMessage(message);
      setOptions(options);
      setAgreeCallback(() => agree);
      setDisagreeCallback(() => disagree);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    },
    []
  );

  /**
   * Close the modal.
   */
  const closeModal = useCallback(() => {
    setIsOpen(false);
    
    document.body.style.overflow = 'auto';
  }, []);

  /**
   * Handle the disagree.
   */
  const disagree = useCallback(() => {
    closeModal();
    disagreeCallback();
  }, [disagreeCallback, closeModal]);

  /**
   * Handle the agree.
   */
  const agree = useCallback(() => {
    closeModal();
    agreeCallback();
  }, [agreeCallback, closeModal]);

  /**
   * Triggering the modal.
   */
  useEffect(() => {
    eventBus.on('open-confirm-modal', openModal);
    return () => {
      eventBus.off('open-confirm-modal', openModal);
    };
  }, [openModal]);

  return (
    <ModalContext.Provider value={{ isOpen, title, message, options, disagree, agree }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
