import React, { Component } from "react";

import Card from "../card/card";
import style from "./request.module.css";
import Spinner from "../spinner/spinner";
import * as actions from "../../store/action/index";
import { connect } from "react-redux";

class Request extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isFetch !== this.props.isFetch) {
      this.props.onFetchOrder();
    }
  }

  render() {
    let datamap;
   
    
    if (this.props.data) {
      datamap = this.props.data.map((user) => (
        <Card
          name={user.username}
          key={user.id}
          email={user.email}
          address={user.address}
        />
      ));
    }

    return (
      <div className={style.request}>
        {this.props.loading ? <Spinner /> : datamap}
      </div>
    );
  }
}
const mapstateToProps = (state) => {
  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrder: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(mapstateToProps, mapDispatchToProps)(Request);
