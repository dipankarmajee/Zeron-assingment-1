import  "./index.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import data from "../data/data"

const Chart = () =>  (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="zeronAssingmentData1" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="zeronAssingmentData2" stroke="#8884d8" fill="#8AFF8A" />
      <Area type="monotone" dataKey="zeronAssingmentData3" stroke="#8884d8" fill="#FF7733" />
    </AreaChart>
  )

  export default Chart