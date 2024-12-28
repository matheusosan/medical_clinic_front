export const getStatusColor = (status: string) => {
  switch (status) {
    case "CANCELADO":
      return "text-red-500 font-bold";
    case "AGENDADO":
      return "text-blue-500 font-bold";
    default:
      return "text-gray-500 font-bold";
  }
};
