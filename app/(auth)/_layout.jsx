import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useUser } from "../../hooks/useUser";
import GuestAuth from "../../components/auth/GuestAuth";

export default function AuthLayout(){

    const{user}=useUser()
    console.log(user)

    return(
        <GuestAuth>
        <StatusBar style="auto" />
            <Stack screenOptions={{headerShown:false,animation:"none"}}/>
        </GuestAuth>
    )

}