import React, { useEffect, useState } from 'react'
import fetchData from '../Context/api'

const useFetch = (endpoint) => {
    const [data,setData]=useState(null)
    useEffect(()=>{
        const FetchDataFromApi=async ()=>{
            const res= await fetchData(endpoint);
            setData(res)
        }
    FetchDataFromApi()

    },[endpoint])
  return {data}

}

export default useFetch
