import React, {useState} from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai'

import ImgContrybe from "../../assets/image/contrybe.svg";
import Posts from '../../components/Posts';
import Menus from '../../components/Menus';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Container } from './styles';

export default function PageProfile() {
    const [navActive, setNavActive] = useState([1])
    function activeNavigation(){
        console.log('NAVA'+navActive[0])
        if(navActive[0] == 0) setNavActive([1])
        if(navActive[0] == 1) setNavActive([0])
    }

    const userName = localStorage.getItem('userName');
    const userClasse = localStorage.getItem('userClasse');

    const history = useHistory();

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }
    let {block, day} = useParams()

    return (
        <Container navActive={navActive[0]}>
            <header>
                <img src={ImgContrybe} alt="Contrybe" />
                <div className="profile">
                    <span><strong>Bem vindo(a),</strong><br /> {userName}</span>
                    <span>
                        <button onClick={handleLogout} type="button">
                            <FiPower size={20} color="red" />
                        </button>
                        <br />
                        <p><strong>Turma: </strong>{userClasse}</p>
                    </span>
                </div>
                <div>
                    <button className="btn-menu-active" type="button" onClick={activeNavigation}><AiOutlineMenu size={20} color="#2b6b06" /></button>
                    <Link className="button" to="/post/new"> Inserir nova resolução </Link>
                </div>
                
            </header>
            <div className="content">
                <Menus 
                navActive={navActive[0]}
                activeNavigation={activeNavigation}
                />
                <Posts 
                block={block}
                day={day}
                />
            </div>

        </Container>
    );
}