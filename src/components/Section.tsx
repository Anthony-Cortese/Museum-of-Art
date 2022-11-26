import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useDispatch } from "react-redux";
import { selectArtwork } from "../features/artistSlice";
import { useAppDispatch, useAppSelector } from "../app/store";
import "./styles.css"

interface SectionInterface {
    id: number;
    artist: string;
    biography: string;
    backgroundImg: string;
    homeRef: React.RefObject<HTMLDivElement>;
 }

 function Section(props: SectionInterface) {
    let myRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const artwork = useAppSelector(selectArtwork);

    return (
        <Wrap ref={myRef} bgImage={props.backgroundImg}>
           <Fade direction="up">
              <ItemSet>
                 <h1 className="artist-font">{props.artist}</h1>
                 
              </ItemSet>
              <p>{props.biography}</p>
           </Fade>
           <Buttons>
              <Fade direction="up">
                 <ButtonGroup>
                    {/* <Link to={`/cars/${props.id}`}> */}
                       <LeftButton className=" hover:animate-bounce ">
                          Custom Order
                       </LeftButton>
                    {/* </Link>
                    <Link to="/cart"> */}
                       <RightButton className="hover:animate-bounce ">
                          Existing Inventory
                       </RightButton>
                    {/* </Link> */}
                 </ButtonGroup>
              </Fade>
              {props.id !== artwork.artist.length && (
                 <DownArrow
                    onClick={() =>
                       props.homeRef?.current?.scrollTo({
                          behavior: "smooth",
                          top: artwork.artist[props.id].ref.offsetTop,
                       })
                    }
                    className="mx-auto cursor-pointer"
                    src="images/down-arrow.svg"
                 ></DownArrow>
              )}
           </Buttons>
        </Wrap>
     );

 }

 export default Section;

const Wrap = styled.div`
   scroll-snap-align: start;
   height: 100vh;
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   background-image: ${(props: { bgImage: string }) =>
      `url("images/${props.bgImage}")`};
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`;

const ItemSet = styled.div`
   padding-top: 15vh;
   test-align: center;
   font-size: 5rem
`;

const ButtonGroup = styled.div`
   display: flex;
   margin-bottom: 30px;
   @media (max-width: 768px) {
      flex-direction: column;
   }
`;

const LeftButton = styled.div`
   background-color: rgba(23, 26, 32, 0.8);
   height: 40px;
   width: 256px;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100px;
   opacity: 0.85;
   text-transform: uppercase;
   font-size: 12px;
   cursor: pointer;
   margin: 8px;
`;

const RightButton = styled(LeftButton)`
   background: white;
   opacity: 0.65;
   color: black;
`;

const DownArrow = styled.img`
   margin-top: 20px;
   height: 40px;
   animation: animateDown infinite 1.5s;
   overflow-x: hidden;
`;

const Buttons = styled.div``;
