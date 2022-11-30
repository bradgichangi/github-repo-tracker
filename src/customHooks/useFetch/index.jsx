import React, { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [api_data, setData] = useState('')
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {

        setLoading(true)

        const fetchData = async () => {
            try { 
                const response = await fetch(url)
                const data = await response.json()

                setData(data)
                setLoading(false)

            }
            catch (err) {
                setError(err)
                setLoading(false)
            }
        }

        fetchData()

    },[url])


    return { api_data, loading, error }
 }

export default useFetch
