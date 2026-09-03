import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)
  const [nome, setNome] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [personagem, setPersonagem] = useState({})
  const [pokemon, setPokemon] = useState({})

  useEffect( () => {
    const getData = async () =>{
      try{
        const response = await axios.get("https://6a79e554674f43f4db11ebc8.mockapi.io/api/person");
        setNome(response.data[9].nome);
        const response2 = await axios.get("https://dragonball-api.com/api/characters/2");
        setPersonagem(response2.data);
        const response3 = await axios.get("https://pokeapi.co/api/v2/pokemon/charizard");
        setPokemon(response3.data);
        console.log("resposta do get:" + response3.data);
        setLoading(false);
      }
      catch(e){
        console.error( "Erro ao carregar API", e );
        setLoading(false);
        setError(true);
      }
    } 
    getData();
  },[])

  if(loading){
    return(<div>carregando</div>)
  }
  if(error){
    return(<div>ocorreu um erro</div>)
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>{nome}</h1>
        </div>
        <div>
          <h1>{personagem.name}</h1>
          <img src={personagem.image} width="250" height="400" alt=""/>
          <h1>{personagem.race}</h1>
        </div>
        <div>
          <h1>Nome: {pokemon.name}</h1>
          <img src={pokemon.sprites.front_default}></img>
          <h1>Tipos: {pokemon.types[0].type.name}, {pokemon.types[1].type.name}</h1>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
