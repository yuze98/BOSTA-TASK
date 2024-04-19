export function ShippingData(data) {
  const transit_data = data.TransitEvents;
  const branch_name = transit_data.filter(
    (el) => el.hub !== undefined && el.hub.includes("Hub")
  );
  
  return transit_data.map((el) => {
    console.log(el.state);
    const {date,time}=extractDateTime(el.timestamp)
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
