import React from 'react';

const Menu = () => {
    return (
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="sidebar-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a className="nav-link active" href="#">
                            <span data-feather="home"></span>
                            Menu
                        </a>
                    </li>
                </ul>


            </div>
        </nav>
    );
};

export default Menu;
