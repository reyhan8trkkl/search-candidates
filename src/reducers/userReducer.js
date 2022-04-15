const initial = [
  {
    first_name: "Bendite",
    email: "brooson0@dell.com",
    project: "Bitchip",
    company: "Aimbu",
  },
  {
    first_name: "Coletta",
    email: "csemonin1@virginia.edu",
    project: "Y-find",
    company: "Innotype",
  },
];
const userReducer = (state = initial, action) => {
  
  switch (action.type) {
    case "DETAIL_USER":
      return action.payload;
    default:
      return state;
  }
};
export default userReducer;
