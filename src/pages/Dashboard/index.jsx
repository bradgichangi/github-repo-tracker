import React, { useState, useEffect } from "react";
import { RepoList, UserInfo } from "../../components";
import { useParams } from "react-router-dom"

const Dashboard = () => {

    const [data, setData] = useState([{
        owner: {}
    }]) 

    const params = useParams()
    const { user } = params

    useEffect(() => {

        function fetchGit(usr) {
            fetch(`https://api.github.com/users/${usr}/repos`)
                .then(response => response.json())
                .then(data => {
                    setData(data)
                    console.log(data)
                })
        }

        fetchGit(user)

    }, [name])
    

    return (
        <>
            <h1>Dashboard</h1>
            
            <UserInfo data={data[0].owner} />
            <p>{`Public Repos: ${data.length}`}</p>
            <RepoList data={data} />
        </>
    )
}
export default Dashboard
