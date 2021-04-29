import { Collapse } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { getDeviceType } from "helpers";
import React from "react";

const alertStyle = {
  width: `${getDeviceType() === "mobile" ? "70%" : "60%"}`,
  position: "absolute",
  marginLeft: `${getDeviceType() === "mobile" ? "" : "18%"}`,
};
const alertValStyle = {
  width: getDeviceType() === "desktop" ? "27vw" : "72vw",
  top: "2vh",
  position: "absolute",
};

const Alerts = ({ alertOpen, setAlertOpen, type, title, body, isVal }) => {
  return (
    <Collapse in={alertOpen}>
      <Alert
        severity={type}
        style={isVal ? alertValStyle : alertStyle}
        onClose={() => {
          setAlertOpen(false);
        }}
      >
        <AlertTitle>{title}</AlertTitle>
        {body}
      </Alert>
    </Collapse>
  );
};

export default Alerts;
