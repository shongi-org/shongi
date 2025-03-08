import React, { ReactNode } from 'react';

type loadingProps = {
  children: ReactNode;
};

const loading: React.FC<loadingProps> = () => {
  return <div>Fetching data</div>;
};
export default loading;
