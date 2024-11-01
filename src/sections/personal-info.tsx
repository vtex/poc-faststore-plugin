type PersonalInfoProps = {
	title?: string;
};
export default function PersonalInfo(props: PersonalInfoProps) {
	return (
		<section>
			<h2>{props.title || "Title of Personal Info Section"}</h2>

			<dl>
				<dt>Name:</dt>
				<dd>Placeholder for name</dd>
				<dt>Address</dt>
				<dd>Placeholder for address</dd>
			</dl>
		</section>
	);
}
