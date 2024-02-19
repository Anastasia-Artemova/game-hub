import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  id: number;
}

const GameScreenshots = ({ id }: Props) => {
  const { data, isLoading, error } = useScreenshots(id);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginTop="20px">
      {data?.results.map((screenshot) => (
        <Image src={screenshot.image} key={screenshot.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
