import React, { useEffect, useState } from 'react'

const RepoList = () => {

    const [data,setData] = useState([]) 

    useEffect(() => {

        function fetchGit() {
            fetch('https://api.github.com/users/bradgichangi/repos')
                .then(response => response.json())
                .then(data => {
                    setData(data)
                    console.log(data)
                })
        }

        fetchGit()

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
