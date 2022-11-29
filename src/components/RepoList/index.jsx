import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const RepoList = ({ username }) => {

    let { name } = useParams()

    const [data, setData] = useState([]) 

    useEffect(() => {

        function fetchGit() {
            fetch(`https://api.github.com/users/${name}/repos`)
                .then(response => response.json())
                .then(data => {
                    setData(data)
                    console.log(data)
                })
        }

        fetchGit()

    },[name])
    


    return (
        <>
            {data.map((repo, i) => <div class='repo' key={i}>{ repo.name}</div>)}
        </>
    )
 }

export default RepoList
