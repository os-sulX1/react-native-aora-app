import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint:'https://cloud.appwrite.io/v1',
  platform:'com.jsm.aora',
  projectId:'6670f2f4003057a78022',
  databaseId:'6670f4b9001943ac2f62',
  userCollectionId:'6670f4ed0038ea930a04',
  videoCollectionId:'6670f54d0031335dc9be',
  storageId:'6670f777003b44d5cf38'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;


const account = new Account(client);
const avatars = new Avatars(client)
const databases = new Databases(client)

export const createUser = async (email:string,password:string , username:string)=>{
  // Register User
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username,
    )
    if(!newAccount) throw Error

    const avatarUrl = avatars.getInitials(username)

    await signIn(email ,password)

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId:newAccount.$id,
        email,
        username,
        avatar:avatarUrl
      }
    )
    
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }

}

export const signIn= async (email:string, password:string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session

  } catch (error) {
    console.log(error)
    throw new Error(error)
    
  }
}


export const  getCurrentUser = async () =>{
try {
  const currentAccount = await account.get()

  if(!currentAccount) throw Error

  const currentUser = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.userCollectionId,
    [Query.equal('accountId',currentAccount.$id)]
  )

  if(!currentUser) throw Error

  return currentUser.documents[0]
} catch (error) {
  console.log(error)
}
}


export const getAllPosts= async() =>{
  try {
    
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.videoCollectionId,
    )

    return posts.documents
  } catch (error) {
    console.log(error)
    
  }
}

export const getLatestPosts= async() =>{
  try {
    
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.videoCollectionId,
      [Query.orderDesc('$createdAt'), Query.limit(5)]
    )

    return posts.documents
  } catch (error) {
    console.log(error)
    
  }
}

export const searchPosts= async(query:string | string[] | undefined) =>{
  try {
    
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.videoCollectionId,
      [Query.search('title',query)]
    )

    return posts.documents
  } catch (error) {
    console.log(error)
    
  }
}


export const getUserPosts= async(userId:string  | undefined) =>{
  try {
    
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.videoCollectionId,
      [Query.equal("creator", userId  as string)]    )

    return posts.documents
  } catch (error) {
    console.log(error)
    
  }
}
