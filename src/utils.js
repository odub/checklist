export const colsToTemplate = cols =>
  ["36px", ...cols.map(col => `${col.width || 1}fr`)].join(" ");

export const formatStatus = status => {
  switch (status) {
    case "scheduled":
      return "Scheduled";
    case "available":
      return "Available";
    default:
      return status;
  }
};
