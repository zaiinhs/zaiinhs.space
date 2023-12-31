import { Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineNightlight, MdNightlight } from "react-icons/md";

export const ModeDisplay = () => {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <Stack>
      <Button variant="outline" onClick={handleMode}>
        {mode ? <MdOutlineNightlight /> : <MdNightlight />}
      </Button>
    </Stack>
  );
};
