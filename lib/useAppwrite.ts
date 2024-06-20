import { type SetStateAction, useEffect, useState } from "react"
import type { Models } from "react-native-appwrite"
import { getAllPosts } from "./appwrite"

 const useAppwrite = (fn:()=>void)=>{
  const [data, setData]= useState<SetStateAction<Models.Document[] |undefined>>([])
  const [isLoading, setIsLoading] = useState(true)
  const fetchData = async()=>{
    setIsLoading(true)
    try {
      const res = await fn()
      setData(res)
      
    } catch (error) {
      
    }finally{
      setIsLoading(false)
    }
  }
  useEffect (()=>{
    fetchData()
  }, [])
  const refetch = ()=> fetchData()
  return {data ,isLoading ,refetch}

}
export default useAppwrite