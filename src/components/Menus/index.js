import React, { useState, useEffect } from 'react';

import StickyBox from 'react-sticky-box'

import { MdExpandLess } from "react-icons/md"

import api from '../../services/api';

import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Container } from './styles';

function Menus(props) {
    const [menus, setMenus] = useState([])
    const userEmail = localStorage.getItem('userEmail')

    //verifica se o usuario ta logado e requisita todos os posts
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userEmail
            }
        }).then(res => {

           //filtra tos os posts que tem (block e day) diferentes e os insere no menus
            setMenus(res.data.filter(function (post) {
                //RETIRADO E ADAPTADO DE https://pt.stackoverflow.com/questions/296660/como-remover-valores-duplicados-de-um-array-de-objetos-facilmente
                return !this[JSON.stringify([post.block, post.day])] && (this[JSON.stringify([post.block, post.day])] = true)
            }, Object.create(null)))
        })
    }, [userEmail])

    return (
        <StickyBox>
            <Container navActive={props.navActive}>
                <button className="btn-menu-deactive" type="button" onClick={props.activeNavigation}><MdExpandLess size={20} color="#2b6b06" /></button>
                <h2>Navegação</h2>
                <ul className="menu">
                    {menus.map(menu => (
                        <>
                        <li key={menu.id} className="menu-item"><Link to={`/profile/${menu.block}/${menu.day}`} >Dia {menu.block}.{menu.day}</Link></li>
                        </>
                    ))}
                </ul>
            </Container>
        </StickyBox>
    );
}

export default Menus