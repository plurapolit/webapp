import moment from "moment-with-locales-es6";

moment.locale("de");

const Time = () => {
  const getCalendar = (timeStemp) => (
    timeStemp.calendar(null, {
      sameDay: "[Today]",
      nextDay: "[Tomorrow]",
      nextWeek: "[nächsten] dddd",
      lastDay: "[Yesterday]",
      lastWeek: "dddd",
      sameElse: "l",
    })
  );

  const getDateOrTime = (string) => {
    const timeStemp = moment(string);
    return getCalendar(timeStemp);
  };

  const isDaysAway = (stringOfDate, numberOfDays) => moment(stringOfDate).add(numberOfDays, "days") <= moment();

  const getDate = (date = moment()) => date.format("ll");

  const getDateInDays = (stringOfDate, numberOfDays) => {
    const timeStemp = moment(stringOfDate).add(numberOfDays, "days");
    return getDate(timeStemp);
  };

  const getTimeStamp = () => moment().format("HH-mm-ss");

  const getDurationInSeconds = (durationInSeconds) => {
    const duration = moment.duration(durationInSeconds, "seconds").asMilliseconds();
    return moment.utc(duration).format("mm:ss");
  };

  return {
    getDateOrTime,
    getTimeStamp,
    getDate,
    getDateInDays,
    isDaysAway,
    getDurationInSeconds,
  };
};

export default Time();
