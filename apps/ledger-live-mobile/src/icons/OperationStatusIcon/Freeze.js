// @flow
import type { OperationType } from "@ledgerhq/live-common/types/index";
import React from "react";
import OperationStatusWrapper from "./Wrapper";
import Freeze from "../Freeze";

export default ({
  confirmed,
  failed,
  size = 24,
  type,
}: {
  confirmed?: boolean,
  failed?: boolean,
  size?: number,
  type: OperationType,
}) => (
  <OperationStatusWrapper
    size={size}
    Icon={Freeze}
    confirmed={confirmed}
    failed={failed}
    type={type}
  />
);
