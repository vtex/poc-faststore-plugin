import { useSession_unstable as useSession } from "@faststore/core/experimental";

type PersonalInfoProps = {
  title?: string;
};
export default function PersonalInfo(props: PersonalInfoProps) {
  const session = useSession();

  return (
    <section>
      <h2>{props.title || "Title of Personal Info Section"}</h2>
      <h1 style={{ color: "blue", fontSize: 40 }}>{JSON.stringify(session)}</h1>
      <dl>
        <dt>Name:</dt>
        <dd>Placeholder for name</dd>
        <dt>Address</dt>
        <dd>Placeholder for address</dd>
      </dl>
    </section>
  );
}
