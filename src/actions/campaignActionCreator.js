import { API_ROOT } from '../components/constants/api'
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
   } from '../components/constants/constants';

   export function getCampaignData(){
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    };
      return dispatch => {
          dispatch({
              type: CAMP_DATA_REQESTED
          })
          fetch(API_ROOT,options)
          .then(response =>{
            if(response.status !== 200){
              dispatch({
                type: ERROR_MSG
              });
              return null
            }
              return response.json();
          })
          .then(json => {
              if(json !== null){
                  dispatch({
                      type:CAMP_DATA_RECIEVED,
                      payload:{
                          campaigns: json['campaigns']
                      }
                  })
              }
          })
      }
  }
  export function addNewCampaign(campaign){
    return dispatch => {
      dispatch({
        type: ADD_NEW_CAMP_REQUESTED
      })
      if(campaign !== null){
        dispatch({
          type: NEW_CAMP_RECIEVED,
          payload:{
            campaign: campaign
          }
        })
      }
    }
  }
  export function updateCampaign(campaign,id){
    return dispatch => {
      dispatch({
        type: EDIT_CAMP_REQUESTED
      })
      if(campaign !== undefined){
        dispatch({
          type: CAMP_UPDATED,
          payload:{
            campaign: campaign,
            id:id
          }
        })
      }
    }
  }
  export function deleteCampaign(selected){
    return dispatch => {
      dispatch({
        type: DELETE_CAMP_REQUESTED
      })
      if(selected !== undefined){
        dispatch({
          type: CAMP_DELETED,
          payload: {
            selected
          }
        })
      }
    }
  }
  export function getFilteredData(filterValues) {
    return dispatch => {
      dispatch({
        type: FILTERED_DATA_REQUESTED
      })
      if(filterValues){
        dispatch({
          type: FILTERED_DATA_RECIEVED,
          payload: {
            filterkeys: filterValues
          }
        })
      }
    }
  }
