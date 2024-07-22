import React, { useEffect, useState } from "react";

const WhatsappMarketingCompaignSubMenu3 = ( props ) => {
  const [selectedTime, setSelectedTime] = useState(10);
  const [dayOptions, setDayOptions] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [time, setTime] = useState(new Date());

  const [selectDate, setSelectDate] = useState(11);
  const [selectMonth, setSelectMonth] = useState(10);
  const [selectYear, setSelectYear] = useState(2024);

  const [selectHour,setSelectHour] = useState(12);
  const [selectMinute,setSelectMinute] = useState(30);
  const [selectDateFormat,setSelectDateFormat] = useState("PM");

  const onChange = (newTime) => {
    setTime(newTime);
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setSelectedTime(selectedTime);
    setSelectHour(selectedTime);
    props.onData4(selectedTime); 
  };

  const handleTimeChange2 = (e) => {
    const selectedTime = e.target.value;
    setSelectMinute(selectedTime);
    props.onData5(selectedTime); 
  };

  const handleTimeChange3 = (e) => {
    const selectedTime = e.target.value;
    setSelectDateFormat(selectedTime);
    props.onData6(selectedTime); 
  };

  useEffect(() => {
    populateDays();
  }, []); // Run only once on component mount
  const populateDays = () => {
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const daysInMonth = new Date(year, month, 0).getDate();
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ value: i < 10 ? '0' + i : i, text: i < 10 ? '0' + i : i });
    }
    setDayOptions(days);
    setSelectMonth(month);
    setSelectYear(year);

    props.onData1(year);
    props.onData2(month);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const [year, month, day] = selectedDate.split("-").map(Number);
    const date2 = new Date(year, month - 1, day);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }).format(date2);
    const date = new Date(formattedDate);
    var datePicker = date.getDate();
    var monthPicker = date.getMonth() + 1;
    if (datePicker < 10) {
      var datePicker = datePicker < 10 ? "0" + datePicker : datePicker.toString()
    }
    if (monthPicker < 10) {
      var monthPicker = monthPicker < 10 ? "0" + monthPicker : monthPicker.toString()
    }
    document.getElementById('day').value = datePicker;
    document.getElementById('month').value = monthPicker;
    document.getElementById('year').value = date.getFullYear();

    setSelectDate(datePicker);
    setSelectMonth(monthPicker);
    setSelectYear(date.getFullYear());

    props.onData1(date.getFullYear());
    props.onData2(monthPicker);
    props.onData3(datePicker);

  };
  const handleDateChange2 = (e) => {
    // const selectedDate = e.target.value;
    // setSelectedDate(selectedDate);
    // const date = new Date(selectedDate);
    // document.getElementById('day').value = date.getDate();
    // document.getElementById('month').value = date.getMonth() + 1;
    // document.getElementById('year').value = date.getFullYear();
    const timeString = e.target.value
    var timeParts = timeString.split(':');
    // Convert hours and minutes to integers
    var hours = parseInt(timeParts[0]);
    var officailhour
    var officailmin
    if (hours > 12) {
      var officailmin = "PM"
      var variable = Number(hours) - 12
      let officailhour1 = variable < 10 ? "0" + variable : variable.toString()
      var officailhour = Number(officailhour1)
    } else {
      var officailhour = Number(hours)
      var officailmin = "AM";
    }
    var minutes = parseInt(timeParts[1]);
    document.getElementById('second').value = minutes
    document.getElementById('hour').value = officailhour
    document.getElementById('format').value = officailmin
    // document.getElementById('month').value = date.getMonth() + 1;
    setSelectHour(officailhour);
    setSelectMinute(minutes);
    setSelectDateFormat(officailmin);

    props.onData4(officailhour);
    props.onData5(minutes);
    props.onData6(officailmin);

  };
  const currentYear = new Date().getFullYear();
  const yearOptions = [];
  for (let i = currentYear; i >= currentYear - 100; i--) {
    yearOptions.push(<option key={i} value={i}>{i}</option>);
  }
  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      if(selectMinute == i){
        options.push(
          <option key={i} value={i < 10 ? '0' + i : i} selected>
            {i < 10 ? '0' + i : i}
          </option>
        );
      }else {
        options.push(
          <option key={i} value={i < 10 ? '0' + i : i} >
            {i < 10 ? '0' + i : i}
          </option>
        );
      }
      
    }
    return options;
  };

  const handleClick = () => {
    const date = document.getElementById('day').value;
    setSelectDate(date);
    props.onData3(date);
  };

  return (
    <div className="h-70 w-120  ">
      <div className="h-10 w-120 flex space-x-16 m-6  text-center" >
        <p className=" mt-5  text-xl flex text-slate-900 ">
          instant
        </p>
        <p className="mt-5 text-xl flex text-slate-900 ">
          select of shedule
        </p>
      </div>
      <div className=" h-40 w-270 bg-purple-100 ">
        <div className=" flex h-6 space-x-20 w-200 " >
          <p className="flex  ml-9  w-64 mt-3  text-slate-900 ">
            select date
          </p>
          <p className=" flex px-40  mt-3 w-100  text-slate-900">
            select time
          </p>
        </div>
        <div className="flex space-x-10 h-30 w-300 m-7 text-slate-900 ">
          <div className="flex h-20 shadow-md px-5  rounded-2xl w-90 bg-black-50  space-x-4 " >
            <button className="space-x-50 flex h-9 mt-5 px-4 py-2 ml-2  shadow-md border text-center  items-center justify-center  border-blue-500 rounded  hover:bg-blue-100 " >
              <select id="day" className=' border-blue-500' onChange={() => handleClick()}>
                {dayOptions.map((day) => (
                  
                  <option key={day.value} value={day.value} selected={day.text === selectDate} >
                    {day.text}
                  </option>

                ))}
              </select>
            </button>
            <button className=" text-slate-900 px-4 py-2 flex border   m-3  mt-5  text-center  items-center justify-center shadow-md border-blue-500 h-9 rounded  hover:bg-blue-100 space-x-15" type="button">
              <select id="month" onChange={populateDays} >
                {selectMonth == "1" ? (
                  <option value="01" selected>January</option>
                ) : (
                  <option value="01">January</option>
                )}

                {selectMonth == "2" ? (
                  <option value="02" selected>February</option>
                ) : (
                  <option value="02">February</option>
                )}

                {selectMonth == "3" ? (
                  <option value="03" selected>March</option>
                ) : (
                  <option value="03">March</option>
                )}

                {selectMonth == "4" ? (
                  <option value="04" selected>April</option>
                ) : (
                  <option value="04">April</option>
                )}

                {selectMonth == "5" ? (
                  <option value="05" selected>May</option>
                ) : (
                  <option value="05">May</option>
                )}

                {selectMonth == "6" ? (
                  <option value="06" selected>June</option>
                ) : (
                  <option value="06">June</option>
                )}

                {selectMonth == "7" ? (
                  <option value="07" selected>July</option>
                ) : (
                  <option value="07">July</option>
                )}

                {selectMonth == "8" ? (
                  <option value="08" selected>August</option>
                ) : (
                  <option value="08">August</option>
                )}

                {selectMonth == "9" ? (
                  <option value="09" selected>September</option>
                ) : (
                  <option value="09">September</option>
                )}

                {selectMonth == "10" ? (
                  <option value="10" selected>October</option>
                ) : (
                  <option value="10">October</option>
                )}

                {selectMonth == "11" ? (
                  <option value="11" selected>November</option>
                ) : (
                  <option value="11">November</option>
                )}

                {selectMonth == "12" ? (
                  <option value="12" selected>December</option>
                ) : (
                  <option value="12">December</option>
                )}
                
              </select>
            </button>
            <button className="border flex px-4 py-2  ml-4 border-blue-500 h-9 m-3 mt-5 text-center  items-center justify-center shadow-md rounded  hover:bg-blue-100">
              <select id="year" onChange={populateDays}>
                {yearOptions}
              </select>
            </button>
            <input type="date" onChange={handleDateChange} className="w-5 h-5 mt-7" />
          </div>
          <div className="flex  w-70 rounded-2xl  shadow-md  h-20 px-4  space-x-4 bg-black-50 ">
            <button className="mt-5 flex ml-3 w-16 border shadow-md h-9 px-4 py-2 border-blue-500 rounded  hover:bg-blue-100">
              <select id="hour" onChange={handleTimeChange}>
                {selectHour == "0" ? (
                  <option value="0" selected>00</option>
                ) : (
                  <option value="0">00</option>
                )}

                {selectHour == "1" ? (
                  <option value="1" selected>01</option>
                ) : (
                  <option value="1">01</option>
                )}

                {selectHour == "2" ? (
                  <option value="2" selected>02</option>
                ) : (
                  <option value="2">02</option>
                )}

                {selectHour == "3" ? (
                  <option value="3" selected>03</option>
                ) : (
                  <option value="3">03</option>
                )}

                {selectHour == "4" ? (
                  <option value="4" selected>04</option>
                ) : (
                  <option value="4">04</option>
                )}

                {selectHour == "5" ? (
                  <option value="5" selected>05</option>
                ) : (
                  <option value="5">05</option>
                )}

                {selectHour == "6" ? (
                  <option value="6" selected>06</option>
                ) : (
                  <option value="6">06</option>
                )}

                {selectHour == "7" ? (
                  <option value="7" selected>07</option>
                ) : (
                  <option value="7">07</option>
                )}

                {selectHour == "8" ? (
                  <option value="8" selected>08</option>
                ) : (
                  <option value="8">08</option>
                )}

                {selectHour == "9" ? (
                  <option value="9" selected>09</option>
                ) : (
                  <option value="9">09</option>
                )}

                {selectHour == "10" ? (
                  <option value="10" selected>10</option>
                ) : (
                  <option value="10">10</option>
                )}

                {selectHour == "11" ? (
                  <option value="11" selected>11</option>
                ) : (
                  <option value="11">11</option>
                )}

                {selectHour == "12" ? (
                  <option value="12" selected>12</option>
                ) : (
                  <option value="12">12</option>
                )}

              </select>
            </button>
            <p className="font-serif mt-6 h-20">
              :
            </p>
            <button className="border flex mt-5 shadow-md h-9  border-blue-500 rounded px-4 py-2 hover:bg-blue-100">
              <select id="second" onChange={handleTimeChange2}>
                {generateOptions(0, 59)}
              </select>
            </button>
            <div className="grid h-9  mt-5 ">
              <button className="border   px-1 py-0 text-sm  flex shadow-md  border-blue-500 rounded  hover:bg-blue-100">
                <select id="format" onChange={handleTimeChange3} className="mt-2">
                {selectDateFormat == "AM" ? (
                  <option value="AM" selected>AM</option>
                ) : (
                  <option value="AM">AM</option>
                )}
                {selectDateFormat == "PM" ? (
                  <option value="PM" selected>PM</option>
                ) : (
                  <option value="PM">PM</option>
                )}
               
                </select>
              </button>
            </div>
            <button >
              <input type="time" onChange={handleDateChange2} className="w-7 b" />
            </button>
            <div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappMarketingCompaignSubMenu3;
