import React from 'react'

const UserInfo = ({data}) => {

    console.log(data)
    return (
        <div className='profile-info'>
            <img className="profile-img" src={data.avatar_url} alt="" />
            <h2 className="profile-name" >{data.login}</h2>
        </div>
    )
}

export default UserInfo
