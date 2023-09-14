import React, { useState } from 'react'

import { Tabs, Tab } from '@nextui-org/react'
import PieChart from './PieChart'

function Chart () {
  const [selectedDataset, setSelectedDataset] = useState('operations')
  const updateSelectedDataset = (e) => {
    setSelectedDataset(e)
  }

  return (
      <div className="flex flex-col w-72 lg:w-auto items-center gap-3 ">
          <div className="w-96 flex min-h-96 flex-col items-center">
              <h1 className="text-xl w-1/2 font-bold text-center">
                  Distribución por
              </h1>
              <Tabs
          selectedKey={selectedDataset}
          onSelectionChange={updateSelectedDataset}
          color="primary"
          aria-label="Options"
        >
                  <Tab key="operations" title="Operaciones"></Tab>
                  <Tab key="categories" title="Categorías"></Tab>
              </Tabs>
          </div>

          <PieChart showDataset={selectedDataset} />
      </div>
  )
}

export default Chart
