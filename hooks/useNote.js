import { NoteContext } from "../context/NoteContext";
import { useContext } from "react";

export function useNote(){
    const context=useContext(NoteContext)

if(!context){
    throw new error("must be inside the UserProvider")
}

    return context
}