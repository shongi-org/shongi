import Image from "next/image";
import { Flex, Box, Container, Card, Avatar, Text } from "@radix-ui/themes";
import { Label } from "@radix-ui/react-label";
import Recommendation from "@/components/Recommendation";
import SelectArea from "@/components/SelectArea";
import ServiceList from "@/components/ServiceList";
import Appointments from "@/components/Appointments";

export default function Home() {
  return (
    <>
      <Flex
        className="w-full overflow-x-hidden p-3"
        justify={"center"}
        direction="column"
      >
        <SelectArea></SelectArea>
        <Recommendation></Recommendation>
        <ServiceList></ServiceList>
        <Appointments></Appointments>
      </Flex>
    </>
  );
}
