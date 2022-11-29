import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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

    },[])
    


    return (
        <>
            { data.length > 0 ?  data.map(repo => {
                <div className='repo'>
                    <p>{repo.name}</p>
                </div>
            }) : console.log('Data is empty')}
        </>
    )
 }

export default RepoList
