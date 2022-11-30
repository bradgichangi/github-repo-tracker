import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import useFetch from '../../customHooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircleDot, faCodeFork } from '@fortawesome/free-solid-svg-icons'

const Repo = () => {

    const navigate = useNavigate()
    const params = useParams()
    const { user, repo } = params
    const [data, setData] = useState('') 
    

    const { loading, error, api_data } = useFetch(`https://api.github.com/users/${user}/repos`);
    console.log(user)
    // console.log(api_data.filter(repos => repos.name == repo))

    function formatDate (raw_date) {
        let date = new Date(raw_date);
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let hour = date.getHours()
        let minute = date.getMinutes()
     
        return `${hour.toString()}:${minute.toString()} ${day.toString()}/${month.toString()}/${year.toString()}`
    }
    
    return (
        <>
        { loading && console.log(loading) }
        {api_data && 
        <>
        <div className='repo-page'>

            <h1 onClick={() =>  window.location.href = api_data[0].html_url}>{`${user}/${api_data[0].name}`}</h1>

            <div>
                <p>{`Created: ${formatDate(api_data[0].created_at)}`}</p>

                <p>{`Last Updated: ${formatDate(api_data[0].updated_at)}`}</p>

                <p>{`Stargazers: ${api_data[0].stargazers_count}`}</p>

                <p>{`Forks: ${api_data[0].forks}`}</p>
                    
                <p>{`Issues: ${api_data[0].open_issues}`}</p>

                <p>{`Watchers: ${api_data[0].watchers_count}`}</p>
            </div>

            

        </div>
        </>}
        
        
        {/* {api_data.filter(repo => repo.name == repo_name)} */}
        </>
        
    )
}

export default Repo
