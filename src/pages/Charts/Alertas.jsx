import React from 'react';

import { ChartsHeader, Alertas as StackedChart } from '../../components';

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Alertas" title="Quantidade de alertas por mês" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;