import React, { useState } from 'react';
import './App.css';
import { HomePage } from './pages';
import { Header } from './components';
import { Box, Button, Divider, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material';
import { DOC_IC, BOX_IC } from './assets';


function App() {
  const anchor = 'right';
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setShowDrawer(open);
  };

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <DOC_IC /> : <BOX_IC />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <DOC_IC /> : <BOX_IC />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <div className="App">
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(true)}>{anchor}</Button>
        <SwipeableDrawer
          anchor={anchor}
          open={showDrawer}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;