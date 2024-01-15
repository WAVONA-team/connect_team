const calculateDurationInMonths = (startDate: Date, endDate: Date) => {
  const diffInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

  return diffInMonths;
}

export default calculateDurationInMonths;
