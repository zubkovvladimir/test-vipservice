import { FC } from 'react';

import { useTitle } from 'ahooks';
import { Search } from 'components/shared/Search';
import { appName } from 'constants/app';

const AviaPage: FC = () => {
  useTitle(`${appName} | поиск`);

  return <Search />;
};

export default AviaPage;
