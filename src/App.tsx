import { Avatar } from "@chingu-x/components/avatar";
import { AvatarGroup } from "@chingu-x/components/avatar-group";
import { Button } from "@chingu-x/components/button";
import { IconButton } from "@chingu-x/components/icon-button";
import { Tooltip } from "@chingu-x/components/tooltip";
import { useState } from "react";

function App() {
  const [tooltipHovered, setTooltipHovered] = useState<string>("");

  const users = ["Dan", "Jane", "Tim"];

  return (
    <>
      <Button>Github</Button>
      <IconButton ariaLabel="button" className="bg-primary h-6 w-2">
        Button
      </IconButton>
      <AvatarGroup>
        {users.map((user) => (
          <Tooltip
            key={user}
            content={user}
            position="top"
            tooltipWidth="small"
            customClassName="text-xs font-medium w-fit"
            isDisplay={tooltipHovered === user}
            hovered={tooltipHovered === user}
          >
            <Avatar>
              <img
                src="https://gravatar.com/avatar/a6416cf1e8d0208251a732a6af75530878cdfd92b85d2de9ba6c4fec92d8a157?s=200&r=g&d=robohash"
                width={40}
                height={40}
                onMouseEnter={() => {
                  setTooltipHovered(user);
                }}
                onMouseLeave={() => {
                  setTooltipHovered("");
                }}
              />
            </Avatar>
          </Tooltip>
        ))}
      </AvatarGroup>
    </>
  );
}

export default App;
