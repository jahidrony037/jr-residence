import { useEffect, useState } from "react";
import Team from "./Team";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  //console.log(teams);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("teams.json");
      const data = await res.json();
      setTeams(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2 className="lg:text-4xl text-2xl font-bold text-center pb-2">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teams.map((team, idx) => (
          <Team key={idx} team={team} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
