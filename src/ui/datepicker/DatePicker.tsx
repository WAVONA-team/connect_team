"use client";
import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

type Props = {
  isDisabled?: boolean;
  onDateChange: (newDate: DateValueType) => void;
};

const DatePicker: React.FC<Props> = ({ isDisabled, onDateChange }) => {
  const [date, setDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  const handleDateChange = (newdate: DateValueType) => {
    console.log("newdate:", newdate);
    setDate(newdate);
    onDateChange(newdate);
  };

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
      onChange={handleDateChange}
    />
  );
};

export default DatePicker;
