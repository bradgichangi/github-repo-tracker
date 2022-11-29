import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircleDot, faCodeFork } from '@fortawesome/free-solid-svg-icons'

const RepoList = ({ data }) => {
    
    return (
        <div className='repo-group'>
            {data.map((repo, i) =>
                <div key={i} className='repo'>
                    <p className='repo-name'>{repo.name}</p>
                    <p className='repo-desc'>{repo.description}</p>
                    <div className='repo-details'>
                        <FontAwesomeIcon icon={faStar} />
                        {repo.stargazers_count}
                        <FontAwesomeIcon icon={faCodeFork} />
                        {repo.forks}
                        <FontAwesomeIcon icon={faCircleDot} />
                        {repo.open_issues}
                    </div>
                </div>)}
        </div>
    )
 }

export default RepoList
