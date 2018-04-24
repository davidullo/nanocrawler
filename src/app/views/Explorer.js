import React from "react";
import { withRouter } from "react-router-dom";

import AccountLink from "../partials/AccountLink";
import KnownAccounts from "../partials/explorer/KnownAccounts";

class Explorer extends React.PureComponent {
  state = {
    search: "",
    error: false
  };

  handleSubmit(e) {
    e.preventDefault();
    const { history } = this.props;
    const { search } = this.state;

    if (/^(ban_)\w+/.test(search)) {
      history.push(`/explorer/account/${search}`);
    } else if (/[A-F0-9]{64}/.test(search)) {
      history.push(`/explorer/block/${search}`);
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    const { search, error } = this.state;

    return (
      <div className="row justify-content-center my-5 mx-0">
        <div className="col col-md-8">
          <h1>Network Explorer</h1>

          <hr />

          <form className="my-5" onSubmit={this.handleSubmit.bind(this)}>
            <label>Enter a Banano address or block hash to get started.</label>

            <div className="form-row">
              <div className="col-md">
                <input
                  type="text"
                  className={`form-control form-control-lg ${
                    error ? "is-invalid" : ""
                  }`}
                  value={search}
                  onChange={e => this.setState({ search: e.target.value })}
                />
              </div>
              <div className="col-auto mt-2 mt-md-0">
                <button className="btn btn-nano-primary btn-lg">Search</button>
              </div>
            </div>
          </form>

          <h3 className="mb-0">Known Accounts</h3>
          <p className="text-muted">
            Some places to start your safari through the jungle
          </p>

          <hr />

          {KnownAccounts.map(account => (
            <KnownAccount key={account.account} account={account} />
          ))}
        </div>
      </div>
    );
  }
}

const KnownAccount = ({ account }) => {
  return (
    <div className="row">
      <div className="col">
        <h5 className="mb-0">
          <AccountLink
            account={account.account}
            name={account.alias}
            className="text-dark break-word"
          />
        </h5>
        <p>
          <AccountLink
            account={account.account}
            className="text-muted break-word"
          />
        </p>
      </div>
    </div>
  );
};

export default withRouter(Explorer);
