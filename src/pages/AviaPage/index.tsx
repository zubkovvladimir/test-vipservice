import { FC } from 'react';

import { useTitle } from 'ahooks';
import { appName } from 'constants/app';

const AviaPage: FC = () => {
  useTitle(`${appName} | поиск`);

  return <div>Main Page</div>;
};

export default AviaPage;
