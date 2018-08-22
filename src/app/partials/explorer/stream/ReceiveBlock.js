import React from "react";
import accounting from "accounting";
import AccountLink from "../../AccountLink";
import BlockLink from "../../BlockLink";
import MonKey from "../../MonKey";

export default function ReceiveBlock({ event }) {
  const { block } = event;
  return (
    <div className="row">
      <div className="col">
        <div className="media align-items-center">
          <MonKey account={block.account} style={{ width: "75px" }} />

          <div className="media-body">
            <p className="mb-0">
              <AccountLink
                account={block.account}
                className="text-dark break-word"
              />
            </p>
            <p className="mb-0">
              <span className="text-success">
                received {accounting.formatNumber(block.amount, 2)} BANANO
              </span>
            </p>
            <p className="mb-0">
              <BlockLink hash={block.hash} className="text-muted break-word" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
