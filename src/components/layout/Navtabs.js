import React from "react";

//style
import { Tabs, Tab } from "react-materialize";
import style from "../../assets/css/Layout.module.css";

//components
import Periodicals from "../promotions/Periodicals";
import Packages from "../promotions/Packages";

const Navtabs = () => {
  return (
    <div>
      <Tabs className="tab-demo z-depth-1" options={{ swipeable: true }}>
        <Tab className={style.tab} title="PERIODIQUES">
          <Periodicals />
        </Tab>
        <Tab className={style.tab} title="PACKAGES">
          <Packages />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Navtabs;
