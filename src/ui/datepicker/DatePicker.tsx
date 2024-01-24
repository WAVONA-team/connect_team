"use client";
import React from "react";
import Datepicker from "react-tailwindcss-datepicker";
import type { DateValueType } from "react-tailwindcss-datepicker";

type Props = {
  isDisabled?: boolean;
  date: DateValueType;
  onDateChange: (newDate: DateValueType) => void;
};

const DatePicker: React.FC<Props> = ({ isDisabled, onDateChange, date }) => {

  return (
    <Datepicker
      i18n={"ru"}
      useRange={true}
      minDate={new Date("2020-01-05")}
      maxDate={new Date("2027-01-30")}
      popoverDirection="down"
      disabled={isDisabled}
      displayFormat={"DD.MM.YYYY"}
      readOnly={true}
      startFrom={new Date("2022-01-01")}
      separator={"-"}
      primaryColor={"blue"}
      value={date}
      onChange={onDateChange}
    />
  );
};

export default DatePicker;
