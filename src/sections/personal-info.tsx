import { Button } from "@faststore/ui";
import { useSession_unstable as useSession } from "@faststore/core/experimental";


type PersonalInfoProps = {
  title?: string;
};
export default function PersonalInfo(props: PersonalInfoProps) {
  const { ...session } = useSession()

  console.log('>> Session', session)

  return (
    <section className={'personalInfo'}>
      <h2>{props.title || "Title of Personal Info Section"}</h2>

      <dl>
        <dt data-fs-poc-title>Name:</dt>
        <dd>Placeholder for name 2</dd>
        <dt>Address</dt>
        <dd>Placeholder for address</dd>
        <Button variant="primary">Primary</Button>
      </dl>
    </section>
  );
}
