import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { InputContainer } from "./styles";

type TextInputProps = {
  icon?: IconProp;
  placeholder?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
};

const TextInput = (props: TextInputProps) => {
  const [value, setValue] = useState(props.initialValue);
  return (
    <InputContainer>
      <input
        placeholder={props.placeholder}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          if (props.onChange) props.onChange(event.target.value);
        }}
      />
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : <></>}
    </InputContainer>
  );
};

export default TextInput;
