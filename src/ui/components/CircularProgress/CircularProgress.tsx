import React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getProgressClassName } from "../../utils/utils";
import { CircularProgressContainer } from "./styles";

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number; minvalue: number; maxvalue: number }
) => {
  return (
    <CircularProgressContainer>
      <CircularProgress
        variant="determinate"
        {...props}
        value={
          ((props.value - props.minvalue) / (props.maxvalue - props.minvalue)) *
          100
        }
        className={getProgressClassName(props.value)}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </CircularProgressContainer>
  );
};

export default CircularProgressWithLabel;
