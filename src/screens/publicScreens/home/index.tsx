import React from 'react';
import { useTranslation } from 'react-i18next';

import { HomeStyled } from './styled';

const HomeScreen: React.FC = () => {
  const { t } = useTranslation();

  return <HomeStyled>{t('common.home_page')}</HomeStyled>;
};

export default HomeScreen;
