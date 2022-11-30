import React, { useState, useEffect } from "react";
import { RepoList, UserInfo, UsernameForm } from "../../components";
import { useParams } from "react-router-dom"
import useFetch from "../../customHooks/useFetch";

const Dashboard = () => {

    const params = useParams()
    const { user } = params

    const { loading, error, api_data } = useFetch(`https://api.github.com/users/${user}/repos`)    
    

    return (
        <>
            <h1>Dashboard</h1>
            
            { loading && console.log(loading) }
            {api_data && <UserInfo data={api_data[0].owner} />}
            {api_data && <p>{`Public Repos: ${api_data.length}`}</p>}
            {api_data && <RepoList data={api_data} />}
            { error && <p>{error}</p> }
        </>
    )
}
export default Dashboard
