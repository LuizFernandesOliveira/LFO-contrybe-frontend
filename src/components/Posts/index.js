import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom'

import api from '../../services/api';

import { Container } from './styles';

function Posts(props) {
    const [posts, setPosts] = useState([]);

    const userName = localStorage.getItem('userName')
    const userEmail = localStorage.getItem('userEmail')
    const userClasse = localStorage.getItem('userClasse')
    const history = useHistory();

    async function handleDeletePost(id) {
        try {
            await api.delete(`posts/${id}`, {
                headers: {
                    Authorization: userEmail,
                }
            })
            setPosts(posts.filter(posts => posts.id !== id))
            history.push(`/profile/${posts[0].block}/${posts[0].day}`)
        } catch (err) {
            alert('Você não tem permissão para deletar esse exercício.')

        }
    }

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userEmail
            }
        }).then(res => {
            setPosts(res.data);
            if(props.block && props.day){
                setPosts(res.data.filter(posts => (Number(posts.block) === Number(props.block) && Number(posts.day) === Number(props.day))))
            }
        })
    }, [userEmail, props]);

    return (
        <Container>
            <h1>Resoluções Cadastradas</h1>
            
            <h2><strong>Bloco: </strong>{props.block ? props.block : 'Todos'} <strong>  Dia: </strong>{props.day ? props.day : 'Todos'}</h2>
            {posts.map(post => (
                <li key={post.id} className="post-item">
                    <div className="user">
                        <strong>Contribuinte:</strong>
                        <p>{userName}</p>
                    </div>
                    <div className="user">
                        <strong>Turma:</strong>
                        <p>{userClasse}</p>
                    </div>
                    <div className="about">
                        <div className="details">
                            <div>
                                <strong>PARTE:</strong>
                                <p>{post.part_number}</p>
                            </div>

                            <div>
                                <strong>EXERCÍCIO:</strong>
                                <p>{post.exercise_number}</p>
                            </div>
                        </div>
                        <iframe title={`Bloco do id  ${post.id}`} width="200" height="100" src={`https://www.youtube.com/embed/${post.link}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>

                    </div>

                    <button className="btn-delete" onClick={() => handleDeletePost(post.id)} type="button">
                        <FiTrash2 size={20} color="red" />
                    </button>
                </li>
            ))}
        </Container>
    )
}

export default Posts