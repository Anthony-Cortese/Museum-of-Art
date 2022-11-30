import React, {useRef} from "react"
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectArtwork } from "../features/artistSlice";
import Section from "./Section"
import museum from "./museum.png"

interface HomeInterface {
    homeRef: React.RefObject<HTMLDivElement>;
}

function Home(props: HomeInterface) {
    const { homeRef } = props;
    const artwork = useSelector(selectArtwork)

    return (
        <Container ref={homeRef}>
         <section id="home">
            <img className="museum" src={museum} alt="museum" />
         </section>
           {artwork.artist.map((art) => (
            <Section
            homeRef={homeRef}
            key={art.id}
            id={art.id}
            artist={art.artist}
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
