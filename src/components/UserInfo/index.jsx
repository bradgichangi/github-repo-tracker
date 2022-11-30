import React from 'react'

const UserInfo = ({data}) => {

    return (
        <div onClick={() =>  window.location.href = data.html_url} className='profile-info'>
            <img className="profile-img" src={data.avatar_url} alt="" />
            <h2 className="profile-name" >{data.login}</h2>
        </div>
    )
}

export default UserInfo
