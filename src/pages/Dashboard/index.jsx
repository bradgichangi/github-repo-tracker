import React from "react";
import { RepoList } from "../../components";
import { useParams } from "react-router-dom"

const Dashboard = () => {

    let { name } = useParams()
    
    return (
        <>
            <h1>Dashboard</h1>
            <h2>Public Repos</h2>
            <RepoList />
        </>
    )
}
export default Dashboard
