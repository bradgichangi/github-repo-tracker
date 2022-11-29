import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, Outlet } from "react-router-dom";

const RepoList = () => {
    const [data,setData] = useState([]) 
    const params = useParams()
    const {user} = params

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

    },[name])
    


    return (
        <div className='repo-group'>
            {data.map((repo, i) =>
                <div key={i} className='repo'>
                    <p className='repo-name'>{repo.name}</p>
                    <div className='repo-details'>
                        <p>{`Stargazers: ${repo.stargazers_count}`}</p>
                        <p>{`Forks: ${repo.forks}`}</p>
                        <p>{`Issues: ${repo.open_issues}`}</p>
                    </div>
                </div>)}
        </div>
    )
 }

export default RepoList
