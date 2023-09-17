"use client";
import { memo } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import styles from "./index.module.css";
const animatedComponents = makeAnimated();

const DropdownList = ({ title, name, ...props }) => {
  return (
    <div className={`form-group ${styles.drp}`}>
      <label htmlFor={name}>{title}</label>
      <Select
        name={name}
        components={animatedComponents}
        classNamePrefix="select"
        onChange={props.onChange}
        className={props.className}
        {...props}
      />
    </div>
  );
};

export default memo(DropdownList);
