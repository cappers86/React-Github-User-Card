import React from "react";

const UserCard = ({img, user,  bio, blog}) => {
    return (
        <div>

            <img src={img} alt="Image"/>
            <p>Name: {user}</p>
            <p >Bio: {bio}</p>
            <p>Blog: {blog}</p>

        </div>
    )
}

export default UserCard