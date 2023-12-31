import {
  Button,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { useState } from "react";
import { HeadTitle } from "@/components/Head";
import { Navbar } from "@/components/Navbar";
import { ContainerMaxWidth } from "@/components/Container";

export default function Home() {
  return (
    <>
      <HeadTitle title="Home" description="lorep ipsum dolor amit" />

      <ContainerMaxWidth>
        <Button>Hallooo</Button>
        <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
          About
        </Link>
      </ContainerMaxWidth>
    </>
  );
}

function Example() {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];
  return (
    <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
      <TabList>
        <Tab>Red</Tab>
        <Tab>Teal</Tab>
        <Tab>Blue</Tab>
      </TabList>
      <TabPanels p="2rem">
        <TabPanel>The Primary Colors</TabPanel>
        <TabPanel>Are 1, 2, 3</TabPanel>
        <TabPanel>Red, yellow and blue.</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
