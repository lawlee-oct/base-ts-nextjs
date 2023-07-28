import React from 'react';
import { ModalProps } from '@mui/material';

import { ModalCardStyle, BoxStyle } from './styled';

interface IModal {
  open: boolean;
  children: React.ReactNode;
  closable: (value: boolean) => void;
  modalProps?: ModalProps;
}

const ModalCard: React.FC<IModal> = ({ open, children, closable, modalProps }) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 350,
    bgcolor: 'background.paper',
    boxShadow: 24,
  };

  return (
    <ModalCardStyle
      className="modal-card"
      keepMounted
      open={open}
      onClose={closable}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      {...modalProps}>
      <BoxStyle sx={style}>{children}</BoxStyle>
    </ModalCardStyle>
  );
};

export default ModalCard;
