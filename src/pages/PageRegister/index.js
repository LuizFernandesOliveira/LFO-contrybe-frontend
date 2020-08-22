import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import ImgContrybe from "../../assets/image/contrybe.svg";
import { Container } from "./styles";

export default function Register() {
  const [name, setName] = useState("");
  const [classe, setClasse] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      classe,
    };

    try {
      const response = await api.post("users", data);

      alert(`Seu Email de acesso: ${response.data.email}`);

      history.push("/");
    } catch (err) {
      alert("Erro no cadastro, tente novamente");
    }
  }

  return (
    <Container>
      <section>
        <img src={ImgContrybe} alt="Contrybe" />
         <Link className="link" to="/">
          <FiArrowLeft size={20} color="#E02041" />
          Voltar
        </Link>
        <h1>Cadastro</h1>
        <p>
          Faça seu cadastro, entre na plataforma e ajude na resolução dos
          exercícios da TRYBE
        </p>
      </section>

      <form onSubmit={handleRegister}>
        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Turma"
          type="text"
          value={classe}
          onChange={(e) => setClasse(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="button" type="submit">
          Cadastrar
        </button>
      </form>
    </Container>
  );
}
