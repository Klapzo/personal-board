import React from 'react'

import PieChart from './PieChart'
// import Selector from './Selector'

function Chart () {
  return (
      <div className="flex flex-col w-96 lg:w-full items-center gap-3 ">
          {/* <Selector/> */}
          <PieChart />
      </div>
  )
}

export default Chart
