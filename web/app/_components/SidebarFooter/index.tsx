import React from "react";
import SecondaryButton from "../SecondaryButton";

const SidebarFooter: React.FC = () => (
  <div className="flex justify-between items-center gap-2 mx-3">
    <SecondaryButton
      title={"Discord"}
      onClick={() =>
        window.electronAPI?.openExternalUrl("https://discord.gg/AsJ8krTT3N")
      }
      className="flex-1"
    />
    <SecondaryButton
      title={"Twitter"}
      onClick={() =>
        window.electronAPI?.openExternalUrl("https://twitter.com/janhq_")
      }
      className="flex-1"
    />
  </div>
);

export default React.memo(SidebarFooter);