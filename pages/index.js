import React from 'react';

import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from '../src/components/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

const ProfileSidebar = (propriedades) => {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
};

function ProfileRelationsBox(propriedades) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>
      <ul>
        {/* {seguidores.map((itemAtual) => {
        return (
          <li key={itemAtual}>
            <a href={`/users/${itemAtual}`}>
              <img src={`https://github.com/${itemAtual}.png`} />
              <span>{itemAtual}</span>
            </a>
          </li>
        );
      })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}

export default function Home() {
  const githubUser = 'edukure';

  const pessoasFavoritas = [
    'omariosouto',
    'juunegreiros',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];

  const [comunidades, setComunidades] = React.useState([
    {
      id: '3123213214',
      title: 'Eu odeio acordar cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    },
  ]);

  const [seguidores, setSeguidores] = React.useState([]);

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          {/* <Box><img src={`https://github.com/${githubUser}.png`} style={{borderRadius: "8px"}}/></Box> */}
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();

                const dadosDoForm = new FormData(e.target);

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                };

                const comunidadesAtualizadas = [...comunidades, comunidade];

                setComunidades(comunidadesAtualizadas);
              }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>

              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>
              <button>Criar Comunidade</button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBox title="Seguidores" items={seguidores}/>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas Favoritas ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
