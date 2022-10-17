import { useCallback, useEffect, useState } from "react";

type Character = {
  name: string;
  url: string;
};

export function useFilms(data: any) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCharacters = useCallback(async () => {
    try {
      data?.characters.forEach((character: any) => {
        fetch(character)
          .then((dataResponse) => dataResponse.json())
          .then((characterData) =>
            setCharacters((prevState) => {
              if (prevState.includes(characterData.name)) return prevState;
              return [
                ...prevState,
                {
                  name: characterData.name,
                  url: characterData.url,
                },
              ];
            })
          );
      });
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [data?.characters]);

  useEffect(() => {
    setIsLoading(true);
    getCharacters();
  }, [getCharacters]);

  return {
    characters,
    isLoading,
  };
}
