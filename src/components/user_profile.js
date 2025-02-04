import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import fire from '../files/firebase';
import '../profile.css';

export const Userprofile = () => {
    const location = useLocation();
    const profile = location.state.profile;
    const name = location.state.name;
    const email = location.state.email;
    const password = location.state.password;
    const mobile = location.state.mobile;
    console.log(profile, name, email, password, mobile);

    const handleMenu = (e) => {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('sidebar_visible');
        document.getElementById('menu').classList.toggle('hide');
    }

    return (
        <>
            <i id="menu" onClick={handleMenu} className="material-icons menu">menu</i>
            <div className="wrapper">
                <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
                <div className="sidebar" id="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                    <div className="logo simple-text logo-normal">
                        <p>CINETIME</p>
                        <div><i onClick={handleMenu} className="material-icons menu_nav">menu</i></div>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to={{ pathname: "/homepage", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                    <i className="material-icons">home</i>
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={{ pathname: "/dashboard", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                    <i className="material-icons">dashboard</i>
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={{ pathname: "/bookings", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                    <i className="material-icons">content_paste</i>
                                    <p>Bookings</p>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={{ pathname: "/userprofile", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                    <i className="material-icons">person</i>
                                    <p>User Profile</p>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={{ pathname: "/feedback", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link" >
                                    <i className="material-icons">notifications</i>
                                    <p>Feedback</p>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="" className="nav-link" >
                                    <i className="material-icons">logout</i>
                                    <p>Logout</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-panel">
                    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                        <div class="container-fluid">
                            <div class="navbar-wrapper">
                            </div>
                            <button class="navbar-toggler" id="pro-nav" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="navbar-toggler-icon icon-bar"></span>
                                <span class="navbar-toggler-icon icon-bar"></span>
                                <span class="navbar-toggler-icon icon-bar"></span>
                            </button>

                        </div>
                    </nav>

                    <div className="profile" style={{ fontFamily: 'sans-serif', textAlign: 'center', maxWidth: '350px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', padding: '100px' }}>
                        <img src={profile} alt="Profile Image" className="profile__image" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto 20px auto', display: 'block', marginTop: '-8%' }} />
                        <div className="profile__name" style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{name}</div>
                        <br />
                        <div className="profile__title" style={{ marginBottom: '20px' }}>{email}</div>

                        <div className="profile__detail" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em', marginBottom: '20px' }}>
                            <i className="material-icons">person</i>{mobile}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
