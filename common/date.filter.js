export default (date, type) => {
  switch (type) {
    case "time":
      return new Date(date).toLocaleTimeString();
    case "date":
      return new Date(date).toLocaleDateString();
    default:
      return new Date(date).toLocaleString();
  }
};
