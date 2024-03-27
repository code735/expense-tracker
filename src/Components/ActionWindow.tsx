import React from 'react'
import PaymentEntry from './PaymentEntry'
import Charts from './charts/Charts'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function ActionWindow() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="headings">
        <h3>Current Balance: </h3>
      </div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Week" value="1" />
              <Tab label="Month" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Charts />
          </TabPanel>
          <TabPanel value="2">
            <Charts />
          </TabPanel>
        </TabContext>
      </Box>

    </div>
  )
}
