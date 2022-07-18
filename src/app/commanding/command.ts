export interface Param {
  name: string;
  value: string;
}

export interface Command {
	name: string;
	params: Param[];
}
