import React, { useEffect, useState } from 'react';

interface Roaster {
  title: string;
}

interface RoasterProps {
  fetchRoasters: () => Promise<{ roasters: Roaster[] }>;
}

export function RoasterList({ roasters }: { roasters: Roaster[] }) {
  return (
    <>
      {roasters.map((roaster) => (
        <span>{roaster.title}</span>
      ))}
    </>
  );
}

export default function Roasters({ fetchRoasters }: RoasterProps) {
  const [currentRoasters, setRoasters] = useState<Roaster[]>([]);

  useEffect(() => {
    (async () => {
      const { roasters } = await fetchRoasters();
      setRoasters(roasters);
    })();
  }, []);

  return <RoasterList roasters={currentRoasters} />;
}
