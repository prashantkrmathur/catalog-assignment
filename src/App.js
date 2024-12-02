import React from "react";
import { Box, Typography, Tabs, Tab, ButtonGroup, Button } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", value: 61000 },
  { name: "Tue", value: 62000 },
  { name: "Wed", value: 64500 },
  { name: "Thu", value: 63800 },
  { name: "Fri", value: 63179 },
];

const App = () => {
  return (
    <Box padding={4}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h3">$63,179.71</Typography>
          <Typography color="green">+2,161.42 (3.54%)</Typography>
        </Box>
      </Box>

      {/* Tabs */}
      <Tabs value={1} indicatorColor="primary" textColor="primary">
        <Tab label="Summary" />
        <Tab label="Chart" />
        <Tab label="Statistics" />
        <Tab label="Analysis" />
        <Tab label="Settings" />
      </Tabs>

      {/* Time Range Selectors */}
      <Box display="flex" justifyContent="flex-end" mt={2} mb={2}>
        <ButtonGroup>
          <Button>1d</Button>
          <Button>3d</Button>
          <Button variant="contained">1w</Button>
          <Button>1m</Button>
          <Button>6m</Button>
          <Button>1y</Button>
          <Button>max</Button>
        </ButtonGroup>
      </Box>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default App;
