import PersonalInfo from "../sections/personal-info";

export const config = {
	path: "/my-account",
	appLayout: false,
	name: "MyAccount",
};

export async function loader() {
	const result = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 150)}`,
		{
			method: "GET",
		},
	);

	return await result.json();
}

// Como eu passo os dados de um loader para as sections de uma forma que as sections possam ser utilizadas fora dssa página?
export default function MyAccount(data: any) {
	return (
		<>
			<h1>My Account page</h1>
			{data.name}
			<img src={data.sprites.front_default} />
			<PersonalInfo />
		</>
	);
}
