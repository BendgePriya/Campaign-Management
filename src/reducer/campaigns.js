import { 
    CAMP_DATA_REQESTED,
    CAMP_DATA_RECIEVED,
    ADD_NEW_CAMP_REQUESTED,
    NEW_CAMP_RECIEVED,
    EDIT_CAMP_REQUESTED,
    CAMP_UPDATED,
    DELETE_CAMP_REQUESTED, 
    CAMP_DELETED, 
    ERROR_MSG,
    FILTERED_DATA_REQUESTED,
    FILTERED_DATA_RECIEVED
   } from '../components/constants/constants'
  
  const initialState = {
    campaigns: [],
    // filteredData: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case CAMP_DATA_REQESTED:
        return {
          ...state,
          status: CAMP_DATA_REQESTED
        };
      case CAMP_DATA_RECIEVED:
        return {
          ...state,
          status: CAMP_DATA_RECIEVED,
          campaigns: action.payload.campaigns
        };
      case ADD_NEW_CAMP_REQUESTED:
        return {
          ...state,
          status: ADD_NEW_CAMP_REQUESTED
        }
      case NEW_CAMP_RECIEVED:
        let tempCamp = state.campaigns.slice(0);
        tempCamp.push(action.payload.campaign)
        return {
          ...state,
          status: NEW_CAMP_RECIEVED,
          campaigns: tempCamp
        }
      case ERROR_MSG:
        return {
          ...state,
          errMsg: ERROR_MSG
        }
      case EDIT_CAMP_REQUESTED:
        return {
          ...state,
          status: EDIT_CAMP_REQUESTED
        }
      case CAMP_UPDATED:
        let id = action.payload.id;
        let tempdata = state.campaigns.slice(0);
        tempdata.forEach((obj , i) =>{
          if(obj['_id'] === id ){
            if (action.payload.campaign.name) {
              obj.name = action.payload.campaign.name;
            }
            if (action.payload.campaign.type) {
              obj.type = action.payload.campaign.type;
            }
            if (action.payload.campaign.last_saved) {
              obj.last_saved = action.payload.campaign.last_saved;
            }
          }
        })
        return {
          ...state,
          status: CAMP_UPDATED,
          campaigns: tempdata
        }
      case DELETE_CAMP_REQUESTED:
        return {
          ...state,
          status: DELETE_CAMP_REQUESTED
        }
      case CAMP_DELETED:
        let selectedIds = action.payload.selected
        let tempArray = state.campaigns.slice(0);
        selectedIds.forEach((camp) => {
          tempArray.forEach((obj,i) =>{
            if(obj.name === camp){
              tempArray.splice(i, 1);
            }
          })
        })
        return{
          ...state,
          status: CAMP_DELETED,
          campaigns: tempArray
        }
      case FILTERED_DATA_REQUESTED:
        return {
          ...state,
          status: FILTERED_DATA_REQUESTED
        }
      case FILTERED_DATA_RECIEVED:
        let filterkeys = action.payload.filterkeys
        let tempCamps = state.campaigns.slice(0)
        let tempFilteredData = []
        filterkeys.forEach((campname) => {
          tempCamps.forEach((obj, i) =>{
            if(obj.name === campname){
              tempFilteredData.push(obj)
            }
          })
        })
        return {
          ...state,
          status: FILTERED_DATA_RECIEVED,
          filteredData: tempFilteredData
        }
      default:
        return state;
    }
  };