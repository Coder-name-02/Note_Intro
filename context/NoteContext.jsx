import { createContext,useEffect,useState } from "react";
import { database,client } from "../lib/appwrite";
import {useUser} from "../hooks/useUser"
import { ID, Permission, Query, Role } from "react-native-appwrite";

const DATABASE_ID="6961d7ab0033f321618c"
const TABLE_ID="notes"


export const NoteContext=createContext()

export function NotesProvider({children}){

  const {user}=useUser()   
 const [notes,setNotes]=useState([])


// fetch Notes
    async function  fetchNotes() {
        try{
            const response= await database.listRows(
                  DATABASE_ID,
                   TABLE_ID,
                   [Query.equal("userId",user.$id)]
            )

            setNotes(response.rows)
        }catch(error){
            console.error(error.message)
        }
        
    }
     // fetch Notes by Id
    async function  fetchNoteById(id) {
        try{
            const response=await database.getRow(
                  DATABASE_ID,
                   TABLE_ID,
                   id
            )
            return response
        }catch(error){
            console.error(error.message)
        }
        
    }
    // Create Notes
    async function  createNotes(data) {
        try{
const newNote=await database.createRow(
    DATABASE_ID,
    TABLE_ID,
    ID.unique(),
    {...data,userId:user.$id},
    [Permission.read(Role.user(user.$id)),
    Permission.update(Role.user(user.$id)),
    Permission.delete(Role.user(user.$id)),
    ]
)
        }catch(error){
            console.error(error.message)
        }
        
    }
   


    // delete Notes
    async function  deleteNote(id) {
        try{
            await database.deleteRow(
                   DATABASE_ID,
                   TABLE_ID,
                   id
            )
        }catch(error){
            console.error(error.message)
        }
        
    }

    useEffect(()=>{

        let unsubscribe

        const channel=`databases.${DATABASE_ID}.tables.${TABLE_ID}.rows`

        if(user){
            fetchNotes()
        
            unsubscribe=client.subscribe(channel,(response)=>{
                const{payload,events}=response

                if(events[0].includes("create")){
                    setNotes((prevNote)=>[...prevNote,payload])
                }

                if(events[0].includes("delete")){
                    setNotes((prevNote)=>prevNote.filter((note)=>
                        note.$id !== payload.$id  ))
                }
            })
        }
        else{setNotes([])}

        return function(){
            if(unsubscribe){
                unsubscribe()
            }
        }
    },[user])

    return(
        <NoteContext.Provider value={{notes,fetchNotes,fetchNoteById,createNotes,deleteNote}}>
{children}
        </NoteContext.Provider>
    )

}