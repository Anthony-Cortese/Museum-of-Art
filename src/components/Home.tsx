import React, {useRef} from "react"
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectArtwork } from "../features/artistSlice";
import Section from "./Section"

interface HomeInterface {
    homeRef: React.RefObject<HTMLDivElement>;
}

function Home(props: HomeInterface) {
    const { homeRef } = props;
    const artwork = useSelector(selectArtwork)

    return (
        <Container ref={homeRef}>
           {artwork.artist.map((art) => (
            <Section
            homeRef={homeRef}
            key={art.id}
            id={art.id}
            artist={art.artist}
            biography={art.biography}
            backgroundImg={art.backgroundImg} />
           ))}
        </Container>
     );
}

export default Home;

const Container = styled.div`
   overflow-y: auto;
   text-align: center;
   height: 100vh;
   scroll-snap-type: y mandatory;
`;
