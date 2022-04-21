import React, { useState } from 'react';
import './App.css';
import { HomePage } from './pages';
import { Header } from './components';
import { Box, Divider, List, ListItem, ListItemText, SwipeableDrawer, AppBar } from '@mui/material';
import { D_BG1, D_BG2, D_BG3, D_BG4, D_BG5, D_BG6, D_BG7, D_BG8, RIGHT_ARROW_G_IC } from './assets';
import { DrawerData } from './utils/Constants';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setShowDrawer(open);
  };

  const textSty = {
    fontFamily: "Jost",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "22px",
    color: "#1d1d1b",
  }

  const list = () => (
    <Box
      sx={{ width: "80vw", paddingTop: "80px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <p className='drawer-header'>Account</p>
        {DrawerData.map((text, index) => (
          <>
            <ListItem button key={text}>
              <ListItemText primaryTypographyProps={{ style: textSty }} primary={text} />
              {text === "Settings" ? <RIGHT_ARROW_G_IC /> : <></>}
            </ListItem>
            {DrawerData?.length - 1 !== index && <Divider />}
          </>
        ))}
      </List>

    </Box>
  );

  return (
    <div className="App">
      <AppBar position="fixed" elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
        <Header onC={toggleDrawer(!showDrawer)} DrawerOpened={showDrawer} />
      </AppBar>
      <SwipeableDrawer
        anchor="right"
        open={showDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <D_BG5 className='d-bg-1' />
        <D_BG7 className='d-bg-2' />
        <D_BG4 className='d-bg-3' />
        <D_BG6 className='d-bg-4' />
        <D_BG2 className='d-bg-5' />
        <D_BG8 className='d-bg-6' />
        <D_BG3 className='d-bg-7' />
        <D_BG1 className='d-bg-8' />
        {list()}
      </SwipeableDrawer>
      <HomePage />
    </div>
  );
}
export default App;
