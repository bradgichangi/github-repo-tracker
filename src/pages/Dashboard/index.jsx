import React from "react";
import { RepoList, UserInfo } from "../../components";
import { useParams } from "react-router-dom"
import useFetch from "../../customHooks/useFetch";

const Dashboard = () => {

    const params = useParams()
    const { user } = params

    const { loading, error, api_data } = useFetch(`https://api.github.com/users/${user}/repos`);

    return (
        <>
            <h1>Dashboard</h1>
            
            {/* { loading && <p>Loading...</p> } */}
            {console.log(loading)}
            {api_data[0] ? 
            <>
                <UserInfo data={api_data[0].owner} />
                <p>{`Public Repos: ${api_data.length}`}</p>
                <RepoList data={api_data} />
            </> : <p id="error-msg">{loading ? 'Loading...' : `The username ${user} doesn't exist`}</p>}

            { error && <p>{error}</p> }

        </>
    )
}
export default Dashboard
