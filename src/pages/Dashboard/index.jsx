import React, { useState, useEffect } from "react";
import { RepoList, UserInfo, UsernameForm } from "../../components";
import { useParams } from "react-router-dom"
import useFetch from "../../customHooks/useFetch";

const Dashboard = () => {

    const [data, setData] = useState('') 

    const params = useParams()
    const { user } = params

    const { loading, error, api_data } = useFetch(`https://api.github.com/users/${user}/repos`);

    console.log(loading)

    // useEffect(() => {

    //     async function getData() {
    //         setData(await useFetch(`https://api.github.com/users/${user}/repos`))
    //     }
        

    //     getData()
    // }, [UsernameForm])

    
    

    return (
        <>
            <h1>Dashboard</h1>
            
            { loading && console.log(loading) }
            {api_data && <UserInfo data={api_data[0].owner} />}
            {api_data && <p>{`Public Repos: ${api_data.length}`}</p>}
            {api_data && <RepoList data={api_data} />}
            { error && <p>{error}</p> }
            {/**Make api data state generic (remove owner attribute) */}

            
            

            {/* {!loading ? <p>Loading...</p> : <UserInfo data={api_data[0].owner} />}
            <p>{`Public Repos: ${api_data.length}`}</p>
            {loading ? <p>Loading...</p> : <RepoList data={api_data} />} */}
        </>
    )
}
export default Dashboard
