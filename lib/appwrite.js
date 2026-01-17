import { Client,Account,Avatars,TablesDB} from "react-native-appwrite";


const client=new Client();

client
.setEndpoint("https://sgp.cloud.appwrite.io/v1")
.setProject("695757ce0025550b6581")
.setPlatform("com.intro.appwriteNote");

const account=new Account(client);
const database=new TablesDB(client);
const avatar=new Avatars(client);


export {client,account,database,avatar}