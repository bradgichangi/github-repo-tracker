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

    useEffect(() => {
        api_data &&  setData(api_data.filter(repo_data => repo_data.name == repo)) 
    },[api_data])


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
        { loading && <p>Loading...</p> }
        {(api_data && data[0]) ?
        <>
        <div className='repo-page'>

            <h1 onClick={() =>  window.location.href = data[0].html_url}>{`${user}/${data[0].name}`}</h1>

            <div>
                <p>{`Created: ${formatDate(data[0].created_at)}`}</p>

                <p>{`Last Updated: ${formatDate(data[0].updated_at)}`}</p>

                <p>{`Stargazers: ${data[0].stargazers_count}`}</p>

                <p>{`Forks: ${data[0].forks}`}</p>
                    
                <p>{`Issues: ${data[0].open_issues}`}</p>

                <p>{`Watchers: ${data[0].watchers_count}`}</p>
            </div>

            

        </div>
        </>: <p id="error-msg">{loading ? 'Loading...' : `The repository ${repo} doesn't exist`}</p>}
        { error && <p>{error}</p> }
        
        </>
        
    )
}

export default Repo
