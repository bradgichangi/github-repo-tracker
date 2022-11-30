import React from 'react'

const UserInfo = ({data}) => {

    return (
        <div onClick={() =>  window.open(data.html_url, '_blank')} className='profile-info'>
            <img className="profile-img" src={data.avatar_url} alt="" />
            <h2 className="profile-name" >{data.login}</h2>
        </div>
    )
}

export default UserInfo
