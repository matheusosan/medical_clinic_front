export const getStatusColor = (status: string) => {
  switch (status) {
    case "CANCELED":
      return "text-red-500 font-bold";
    case "COMPLETED":
      return "text-green-500 font-bold";
    case "SCHEDULED":
      return "text-blue-500 font-bold";
    default:
      return "text-gray-500 font-bold";
  }
};
