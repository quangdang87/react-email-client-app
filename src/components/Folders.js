import React from "react";
import ComposeMail from "../components/ComposeMail.js";
import {NavLink} from "react-router-dom";
import MailList from "../components/MailList.js";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {storeComposeMail} from "../actions/compose.js";
import {requestApiData} from "../actions/inbox.js";
import {Nav} from "react-bootstrap";

export class Folders extends React.Component {
  constructor(props) {
    super(props);
    this.handleCompose = this.handleCompose.bind(this);
  }

  componentWillMount() {
    this.props.requestApiData();
  }

  handleCompose() {
    this.props.storeComposeMail({});
  }

  render() {
    return (
      <div className="folders vl">
        <NavLink
          className="composebtn outer"
          to="/composemail"
          onClick={this.handleCompose}
        >
          <button className="btn composebtn">Compose</button>
        </NavLink>
        <div className="list-group">
          <br />
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/inbox"
          >
            Inbox
          </NavLink>
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/sent"
          >
            Sent Mail
          </NavLink>
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/draft"
          >
            Draft
          </NavLink>
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/draft"
          ></NavLink>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({storeComposeMail, requestApiData}, dispatch);

export default connect(null, mapDispatchToProps, null, {pure: false})(Folders);
