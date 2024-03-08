import React from "react";

import Button from "../../components/Button";
import FlexBox from "../../components/FlexBox";

import style from "./notfound.module.css";

function NotFound() {
  return (
    <div>
      <FlexBox
        center={true}
        style={{ height: "100vh", flexDirection: "column" }}
      >
        <div className={style.title}>Page Not Found</div>
        <br />
        <Button to="/" as="link">
          Go back to home
        </Button>
      </FlexBox>
    </div>
  );
}

export default NotFound;
