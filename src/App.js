import FanInformation from "./FanInformation";
import PageHeading from './PageHeading.js';


function App() {


  const ancientBirbsTeam = {
    id: 1,
    name: "Torrano Ancient Birbs",
    city: "Torrano",
    stadium: {
      name: "Birbs Nest",
      capacity: 30000,
    }
  }

  const modernBirbs = {
    id: 2,
    name: "Torrano Modern Birbs",
    city: "Torrano",
    stadium: {
      name: "Birb Roost",
      capacity: 30001,
    }
  }

  const sportsTeams = [ancientBirbsTeam, modernBirbs];

  const followTeam = (name) => {
    console.log(`You are now following the ${name}!`);
  }

  return (
    <div>
    <div>
      <PageHeading>
        <h1>All the sports teamssss ye</h1>
        <h2>Allllllll the tiiiimmeeeee</h2>
        <h3>All the times....</h3>
      </PageHeading>
    </div>
      {
        sportsTeams.map((team, index)=>{
          return (
          <FanInformation 
          key = {team.id}
          teamName={team.name}
          number = {index}
          city = {team.city}
          stadium = {team.stadium}
          followTeamFunction = {followTeam}
          />
          )
        })
      }

    </div>
  );
}

export default App;