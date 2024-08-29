import { parseISO, format } from "date-fns";
import React from "react";

interface DateFormatterProps {
  dateString: string;
};

const DateFormatter: React.FC<DateFormatterProps> = ({
  dateString
}) => {
  const date = parseISO(dateString);
  return (
    <time
      dateTime={dateString}
      className="font-medium text-gray-500 text-sm"
    >
      {format(date, "yyy년 MM월 dd일")}
    </time>
  )
};

export default DateFormatter;
