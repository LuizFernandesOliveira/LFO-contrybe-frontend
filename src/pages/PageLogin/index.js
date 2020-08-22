import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { FiLogIn } from "react-icons/fi"

import api from "../../services/api"


import ImgContrybe from "../../assets/image/contrybe.svg"
import { Container } from "./styles"

export default function PageLogin() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const history = useHistory()

  async function hadleLogin(e) {
    e.preventDefault()
    try {
      const response = await api.post("sessions", { email, password })
      localStorage.setItem("userName", response.data.name)
      localStorage.setItem("userEmail", email)
      localStorage.setItem("userClasse", response.data.classe)

      history.push("profile")
    } catch (err) {
      alert("falha no login, tente novamente")
    }
  }

  return (
    <Container>
      <img src={ImgContrybe} alt="Contrybe" />
      <form onSubmit={hadleLogin}>
        <h1>Faça seu login</h1>
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
          Entrar
        </button>

        <Link className="link" to="/register">
          <FiLogIn size={20} color="#76ff03" />
          Não tenho cadastro
        </Link>
      </form>
    </Container>
  );
}
