const userDet = (state = '', action) => {
    switch(action.type) {
        case "DETAIL_USERS":
            return action.payload ;
        default:
            return state;
        }
  }
  export default userDet;