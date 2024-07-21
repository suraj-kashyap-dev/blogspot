import React from "react";

import { BaseInput } from "../Form";
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <BaseInput
        type="text"
        name="name"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default GlobalFilter;
