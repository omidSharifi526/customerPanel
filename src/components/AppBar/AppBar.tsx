import React from "react";
import moment from "moment-jalaali";
import ToggleMode from "../ToggleMode/ToggleMode";

// تنظیم locale برای تاریخ شمسی
moment.loadPersian({ usePersianDigits: false });

const AppBar: React.FC = () => {
  const today = moment().format("dddd، jD jMMMM jYYYY"); // فرمت تاریخ شمسی

  return (
    <div className="navbar bg-base-200 shadow-lg px-4 flex justify-between ">
    

      {/* بخش وسط (تاریخ شمسی) */}
      <div className="flex-none">
        <span className="text-sm font-semibold">{today}</span>
      </div>

      {/* بخش راست (دکمه‌ها و آیکون‌ها) */}
      <div className="flex-none">
      <ToggleMode/>
      </div>
    </div>
  );
};

export default AppBar;
