import React, { Component } from 'react'
import PingService from "../services/ping.service";

export default class PositionsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
    }

    componentDidMount = async () => {
        await PingService.ping().then(res => {
            this.setState({
                success: res.data.success
            });
            console.log("Done: ", this.state.success);
        })
    }

    render() {
      const {success} = this.state;
      return (
          <div>
              <p>React Edit Position Component : {success}</p>
          </div>
      )
  }
}
