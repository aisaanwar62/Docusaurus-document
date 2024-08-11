import React from "react";
import DocSidebar from "@theme-original/DocSidebar";
import type { Props } from "@theme/DocSidebar";

import "../../css/custom.css";

export default function DocSidebarWrapper(props: Props): JSX.Element {
  console.log("Custom DocSidebarWrapper is being used"); // Add this line for verification
  return (
    <div className="custom-sidebar">
      <DocSidebar {...props} />
    </div>
  );
}
