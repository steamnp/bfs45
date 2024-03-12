export type Pokemon = {
  name: string;
  url: string;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type StatsArray = Stat[];
