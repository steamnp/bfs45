import React from "react";
import FlexBox from "../../components/FlexBox";

import style from "./notfound.module.css";

function NotFound() {
  return (
    <div>
      <FlexBox center={true} style={{ height: "100vh" }}>
        <div className={style.title}>Page Not Found</div>
      </FlexBox>
    </div>
  );
}

export default NotFound;
