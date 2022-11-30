import React, { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [api_data, setData] = useState('')
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {

        setLoading(true)

        const fetchData = async () => {
            try {
                await fetch(url).then(response => response.json())
                .then(data => setData(data))
                .catch(error => {
                    setError(error)
                    setLoading(false)
                })
                setLoading(false)
                
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()

    },[url])


    return { api_data, loading, error }
 }

export default useFetch
