import React, { Component } from 'react';
import Header from '../components/header/header';
import Result from '../components/campaign/result';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  getCampaignData, 
  addNewCampaign, 
  updateCampaign, 
  deleteCampaign,
  getFilteredData
} from '../actions/campaignActionCreator'
class CampContainer extends Component {
  componentDidMount() {
    this.props.getCampaignData();
  }
  render() {
    let source = [];
    let filteredData = this.props.campsData.filteredData
    let campaigns = this.props.campsData.campaigns
    if(campaigns !== undefined){
        campaigns.forEach((obj) => {
        source.push(obj['name'])
      })
    }
    return (
      <div>
          <Header 
          addNewCampaign={this.props.addNewCampaign}
          source={source}
          getFilteredData={this.props.getFilteredData}
          />
          {this.props.campsData.campaigns && 
          <Result 
          campaigns={filteredData !== undefined ? filteredData : campaigns}
          updateCampaign={this.props.updateCampaign}
          deleteCampaign={this.props.deleteCampaign}
          />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  campsData: state.campaigns,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCampaignData,
      addNewCampaign, 
      updateCampaign, 
      deleteCampaign,
      getFilteredData
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(CampContainer);