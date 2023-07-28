import React from 'react';

import { ContentStyled } from './styled';

const ContentLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>;
};

export default ContentLayout;
