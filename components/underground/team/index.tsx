import styles from './Team.module.scss';

type TypeTeam = {
  img: string;
  name: string;
  username: string;
  description: string;
  role: string;
};

export const Team: React.FC = () => {
  const teams: TypeTeam[] = [
    {
      img: '/img/team/default.jpg',
      name: 'Diamond Hands',
      username: '@DiamondHDegen',
      description:
        'Hodler of all, seller of none. Background in mechanical engineering, control systems and manufacturing joints. UK',
      role: 'Project lead',
    },
    {
      img: '/img/team/tryfindme.jpg',
      name: 'TryFindMe',
      username: '@TryFindMe',
      description:
        'Plays a lot of hide and seek, still cant find him. Experienced admin, discord support and hustler. NL',
      role: 'Admin',
    },
    {
      img: '/img/team/erecia.jpg',
      name: 'Erecia',
      username: '@Erecia',
      description:
        'Still trying to count all this degens skills. A handyman to manage collabs, and assist on marketing and art. FR',
      role: 'Collab Manager',
    },
    {
      img: '/img/team/cryptoguru.jpg',
      name: 'CryptoGuru',
      username: '! CryptoGuru#2722',
      description:
        'An expert on all things crypto. A full stack dev that can code on a make-shift toaster. CA',
      role: 'Senior Dev',
    },
    {
      img: '/img/team/presidentpush.jpg',
      name: 'Presidentpush',
      username: '@presidentpush',
      description:
        'A manager by day and degenerate by night, making sure UDG is pushin P. AU',
      role: 'Socials manager',
    },
    {
      img: '/img/team/david.jpg',
      name: 'David_Ace',
      username: 'David_Ace#9904',
      description:
        'Always has an ace up his sleeve to bring the vision to life. a graphic designer that doesnt stray away from greatness. PH',
      role: 'Artist',
    },
    {
      img: '/img/team/lepkarepka.jpg',
      name: 'Lepkarepka',
      username: 'lepkarepka#9845',
      description:
        'Spends most days buried in his illustrations, a mix of different art styles keeps him fresh af. PL',
      role: 'Artist',
    },
    {
      img: '/img/team/reitan.jpg',
      name: 'Reitan',
      username: 'RichDesignArt777#2540',
      description:
        'Convinced he’s a robot in disguise. His speed is second to none and can match many styles. ID',
      role: 'Artist',
    },
  ];
  return (
    <div className={styles.page}>
      <h1>The TEAM</h1>
      <div className={styles.list}>
        {teams.map((team: TypeTeam, index: number) => (
          <div className={styles.item} key={`team-${index}`}>
            <img src={team.img} width="100%" alt="" />
            <div className={styles.info}>
              <h3>{team.name}</h3>
              <p className={styles.username}>{team.username}</p>
              <p>{team.description}</p>
              <p className={styles.role}>
                <span>Role: </span>
                {team.role}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h3>And a handful of contributors</h3>
    </div>
  );
};
