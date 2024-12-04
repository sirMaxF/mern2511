'use client'

import Image from "next/image";
import { Main } from "./components";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [type, setType] = useState('');
  const [genre, setGenre] = useState('');
  const [List, setList] = useState('');

  let url = new URL('http://localhost:8800/api/lists');

  useEffect(() => {
    url.searchParams.set('type', type);
    url.searchParams.set('genre', genre);

    const getRandomlists = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDc0MTM4OGM2NDFhN2FkNWY0N2I1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczMzIzOTk2MCwiZXhwIjoxNzMzNjcxOTYwfQ.ZrP53Rw4CUv_l18jlMswAwG9vE4s3XHhDG4hOBtweQU'
          }
        });

        const result = await response.json();
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }


    getRandomlists()
  }, [type, genre])



  return (
    <Main />
  );
}
