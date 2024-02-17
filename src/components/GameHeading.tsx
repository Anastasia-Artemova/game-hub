import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gamequery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gamequery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
