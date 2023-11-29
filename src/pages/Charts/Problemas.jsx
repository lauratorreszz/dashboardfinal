import React from 'react';

import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Problemas as PieChart } from '../../components';

const Problemas = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Problemas" title="Frequência de problemas" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);

export default Problemas;