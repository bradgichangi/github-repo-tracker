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

    if(error) console.log('heyyy')
    

    return (
        <>
            <h1>Dashboard</h1>
            
            { loading && console.log(loading) }
            {api_data[0] ? 
            <>
                <UserInfo data={api_data[0].owner} />
                <p>{`Public Repos: ${api_data.length}`}</p>
                <RepoList data={api_data} />
            </> : <p id="error-msg">{`The username ${user} doesn't exist`}</p>}

            { error && <p>{error}</p> }

        </>
    )
}
export default Dashboard
