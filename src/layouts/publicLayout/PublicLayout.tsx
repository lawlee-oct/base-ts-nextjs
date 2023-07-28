import React from 'react';

import HeaderLayout from './header';
import FooterLayout from './footer';
import ContentLayout from './content';

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <HeaderLayout />

      <ContentLayout>{children}</ContentLayout>

      <FooterLayout />
    </main>
  );
};

export default PublicLayout;
