export const convertDate = (type, timestamp) => {
  switch (type) {
    case 'employee':
      return `${timestamp.getUTCFullYear()}-${
        timestamp.getMonth() + 1
      }-${timestamp.getDate()}`;

    case 'patrol':
      return `${timestamp.getUTCFullYear()}-${
        timestamp.getMonth() + 1
      }-${timestamp.getDate()} 
      ${
        timestamp.getHours() > 10
          ? timestamp.getHours()
          : `0${timestamp.getHours()}`
      }:${
        timestamp.getMinutes() > 10
          ? timestamp.getMinutes()
          : `0${timestamp.getMinutes()}`
      }:${
        timestamp.getSeconds() > 10
          ? timestamp.getSeconds()
          : `0${timestamp.getSeconds()}`
      }`;

    default:
      break;
  }
};
