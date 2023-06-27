import Dialog from '@material-ui/core/Dialog';
import React, { useState } from 'react';

const Popup: React.FC<{ open: boolean; onClose: () => void , children:any | HTMLAllCollection}> = ({ open, onClose, children }) => {
  return (
    <Dialog open={open} onClose={onClose} disableBackdropClick={true}>
      {children}
    </Dialog>
  );
};

const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const PopupComponent: React.FC<{children:any}>= ({ children }) => {
    return <Popup open={isOpen} onClose={closePopup}>{children}</Popup>;
  };

  return { openPopup, closePopup, PopupComponent };
};

export default usePopup;
