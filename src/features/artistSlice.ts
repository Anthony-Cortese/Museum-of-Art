import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {RootState, useAppSelector} from "../app/store"
import { artistData } from "../artistData";

// Define a type for the slice state
interface ArtworkState {
    artist : Painting[];
    cart: Painting[];
    total: number;
 }

 type Painting = {
    id: number;
    artist: string;
    painting: string;
    inStock: boolean;
    biography: string;
    backgroundImg: string;
    ref: any;
    price: number;
    highlights: string[];
    quantity: number;
 };

 const initialState: ArtworkState = {
    artist: [...artistData],
    cart: [],
    total: 0,
 };

 export const artistSlice = createSlice({
    initialState,
    name: "painting",
    reducers: {
        setTotal: (state, action) => {
            state.total = action.payload
        }
    }
 })

 export const { setTotal } =
   artistSlice.actions;
export const selectArtwork = (state: RootState) => state.artist;

export default artistSlice.reducer;