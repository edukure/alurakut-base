import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';

const ProfileSidebar = (propriedades) => {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  );
};

export default function Home() {
  const githubUser = 'edukure';

  return (
    <>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          {/* <Box><img src={`https://github.com/${githubUser}.png`} style={{borderRadius: "8px"}}/></Box> */}
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>Welcome</Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <Box>Pessoas da Comunidade</Box>
        </div>
      </MainGrid>
    </>
  );
}
