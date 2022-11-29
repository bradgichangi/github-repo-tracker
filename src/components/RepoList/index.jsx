import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, Outlet } from "react-router-dom";

const RepoList = ({ data }) => {
    
    return (
        <div className='repo-group'>
            {data.map((repo, i) =>
                <div key={i} className='repo'>
                    <p className='repo-name'>{repo.name}</p>
                    <div className='repo-details'>
                        <p>{`Stargazers: ${repo.stargazers_count}`}</p>
                        <i className="fa-regular fa-code-fork"></i>
                        <p>{`Forks: ${repo.forks}`}</p>
                        <p>{`Issues: ${repo.open_issues}`}</p>
                    </div>
                </div>)}
        </div>
    )
 }

export default RepoList
