import { Drawer, Tab, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { setFriendOpen } from "modules/sidebar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="tabpanel"
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && <p>{children}</p>}
    </div>
  );
}

function Friend() {
  const open = useSelector((state) => state.sidebar.friendOpen);

  const dispatch = useDispatch();
  const setOpen = (open) => dispatch(setFriendOpen(open));

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <div className="sidebar friend">
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="friend tabs"
            variant="fullWidth"
          >
            <Tab label="친구" />
            <Tab label="보낸 요청" />
            <Tab label="받은 요청" />
          </Tabs>
        </div>
        <TabPanel value={value} index={0}>
          친구 목록
        </TabPanel>
        <TabPanel value={value} index={1}>
          받은 요청
        </TabPanel>
        <TabPanel value={value} index={2}>
          보낸 요청
        </TabPanel>
      </div>
    </Drawer>
  );
}

export default Friend;
