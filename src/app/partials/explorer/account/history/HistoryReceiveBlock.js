import React from "react";
import _ from "lodash";
import accounting from "accounting";

import AccountLink from "../../../AccountLink";
import BlockLink from "../../../BlockLink";

export default function HistoryReceiveBlock({ block }) {
  return (
    <tr>
      <td className="text-success">{_.capitalize(block.type)}</td>
      <td>
        <AccountLink account={block.account} className="text-dark" />
      </td>
      <td className="text-success">
        +{accounting.formatNumber(block.amount, 2)} BANANO
      </td>
      <td>
        <BlockLink hash={block.hash} short className="text-muted" />
      </td>
    </tr>
  );
}
