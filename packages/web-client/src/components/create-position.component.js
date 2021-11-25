import React, { Component } from "react";
import PositionDataService from "../services/position.service";

export default class CreatePosition extends Component {
  constructor(props) {
    super(props);
    this.onChangePortfolio = this.onChangePortfolio.bind(this);
    this.onChangeProtocol = this.onChangeProtocol.bind(this);
    this.onChangeAsset = this.onChangeAsset.bind(this);
    this.onChangeAssetType = this.onChangeAssetType.bind(this);
    this.savePosition = this.savePosition.bind(this);
    this.newPosition = this.newPosition.bind(this);

    this.state = {
      portfolio: '',
      protocol: '',
      asset: '',
      assetType: 'Token'
    };
  }

  onChangePortfolio(e) {
    this.setState({portfolio: e.target.value})
  }

  onChangeProtocol(e) {
    this.setState({protocol: e.target.value})
  }

  onChangeAsset(e) {
    this.setState({asset: e.target.value})
  }

  onChangeAssetType(e) {
    this.setState({assetType: e.target.value})
  }


  savePosition() {

    const data = {
      portfolio: this.state.portfolio,
      protocol: this.state.protocol,
      asset: this.state.asset,
      assetType: this.state.assetType
    };

    PositionDataService.create(data)
      .then(response => {
        this.setState({
          portfolio: response.data.portfolio,
          protocol: response.data.protocol,
          asset: response.data.asset,
          assetType: response.data.assetType
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newPosition() {
    this.setState({
      portfolio: "",
      protocol: "",
      asset: "",
      assetType: "token"
    });
  }

  render() {
    return (
      <div className="submit-form">
        
          <div>
            <div className="form-group">
              <label htmlFor="portfolio">Portfolio</label>
              <input
                type="text"
                className="form-control"
                id="portfolio"
                required
                value={this.state.portfolio}
                onChange={this.onChangePortfolio}
                name="portfolio"
              />
            </div>

            <div className="form-group">
              <label htmlFor="protocol">Protocol</label>
              <input
                type="text"
                className="form-control"
                id="protocol"
                required
                value={this.state.protocol}
                onChange={this.onChangeProtocol}
                name="protocol"
              />
            </div>

            <div className="form-group">
              <label htmlFor="asset">Asset</label>
              <input
                type="text"
                className="form-control"
                id="asset"
                required
                value={this.state.asset}
                onChange={this.onChangeAsset}
                name="asset"
              />
            </div>


            
            <div className="form-group">
              <label htmlFor="assetType">Asset Type</label>
              <input
                type="text"
                className="form-control"
                id="assetType"
                required
                value={this.state.assetType}
                onChange={this.onChangeAssetType}
                name="assetType"
              />
            </div>

            <button onClick={this.savePosition} className="btn btn-success">
              Save
            </button>
          </div>
      </div>
    );
  }
}