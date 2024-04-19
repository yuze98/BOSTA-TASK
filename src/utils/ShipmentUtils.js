export function ShippingData(data) {
  const transit_data = data.TransitEvents;
  const branch_name = transit_data.filter(
    (el) => el.hub !== undefined && el.hub.includes("Hub")
  );

  return transit_data.map((el) => {
    console.log(el.state);
    const { date, time } = extractDateTime(el.timestamp);
    return {
      branch:
        branch_name[0] !== undefined
          ? branch_name[0].hub.split("Hub")[0]
          : "nasr", // assuming that nasr city is always the city
      date: date,
      time: time,
      details: el.state,
    };
  });
}
export function extractDateTime(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let hours = date.getHours();
  const minutes = date.getMinutes();

  // Determine if it's AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Pad single digit values with leading zeros
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Format date as MM/DD/YYYY
  const formattedDate = `${month}/${day}/${year}`;

  return {
    date: formattedDate,
    time: `${formattedHours}:${formattedMinutes} ${period}`,
  };
}

export function getCurrentDate() {
  // Create a new Date object
  var today = new Date();

  // Get hours, minutes, and seconds
  var hours = today.getHours();
  var minutes = today.getMinutes();

  // Convert hours to AM/PM format
  var ampm = hours >= 12 ? "pm" : "am";

  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  // Add leading zero to minutes if less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Get the month, day, and year
  var month = today.getMonth() + 1; // Month starts from 0
  var day = today.getDate();
  var year = today.getFullYear();

  // Get the day of the week
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var dayOfWeek = days[today.getDay()];

  // Construct the formatted date string
  var formattedDate =
    "at " +
    hours +
    ":" +
    minutes +
    " " +
    ampm +
    " " +
    month +
    "/" +
    day +
    "/" +
    year +
    " " +
    dayOfWeek;

  return formattedDate;
}
export function dateExtraction(dateString) {
  const date = new Date(dateString);
  // Month names array
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get day, month, and year from the date object
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Format the date
  return `${day} ${month} ${year}`;
}
