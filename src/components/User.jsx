import React from 'react'
import user from '../assets/user.png'

const User = () => {
    return (
        <div class="nav-item dropdown nav-user mt-1 px-3">
            <a class="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={user} alt="" class="user-avatar-md rounded-circle" />
            </a>
            <div class="dropdown-menu dropdown-menu-right nav-user-dropdown p-3" aria-labelledby="navbarDropdownMenuLink2">
                <div class="nav-user-info text-center">
                    <h5 class="mb-2  nav-user-name"><i class="fa-solid fa-user"></i> Test User</h5>
                </div>
            </div>
        </div>
    )
}

export default User;