import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import ImgContrybe from "../../assets/image/contrybe.svg";
import { Container } from "./styles";

export default function NewPost() {
  const [block, setBlock] = useState();
  const [day, setDay] = useState();
  const [part_number, setPart_number] = useState();
  const [exercise_number, setExercise_number] = useState();
  const [link, setLink] = useState("");
  const userEmail = localStorage.getItem("userEmail");
  const history = useHistory();

  async function handleNewPosts(e) {
    e.preventDefault();

    const data = {
      block,
      day,
      part_number,
      exercise_number,
      link,
    };

    try {
      await api.post("posts", data, {
        headers: {
          Authorization: userEmail,
        },
      });

      history.push(`/profile/${block}/${day}`);
    } catch (err) {
      alert("erro ao cadastrar resolução, tente novamente");
    }
  }

  return (
    <Container>
      <section>
        <img src={ImgContrybe} alt="Contrybe" />
        <Link className="link" to="/profile">
          <FiArrowLeft size={20} color="#E02041" />
          Voltar
        </Link>
        <h1>Nova resolução</h1>
        <p>
          Descreva a sua resolução conforme os campos abaixo
        </p>
      </section>

      <form onSubmit={handleNewPosts}>
        <input
          placeholder="Bloco"
          value={block}
          onChange={(e) => setBlock(e.target.value)}
        />
        <input
          placeholder="Dia"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <input
          placeholder="Parte"
          value={part_number}
          onChange={(e) => setPart_number(e.target.value)}
        />
        <input
          placeholder="exercicio"
          value={exercise_number}
          onChange={(e) => setExercise_number(e.target.value)}
        />

        <input
          placeholder="link video"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button className="button" type="submit">
          Cadastrar
        </button>
      </form>
    </Container>
  );
}
