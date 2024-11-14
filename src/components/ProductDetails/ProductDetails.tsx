import { useSession_unstable as useSession } from "@faststore/core/experimental";
import Link from "next/link";

const ProductDetails = () => {
  const session = useSession();
  return (
    <>
      <h1 style={{ color: "blue", fontSize: 40 }}>{JSON.stringify(session)}</h1>
      <Link href="/">Dashboard</Link>
    </>
  );
};

export default ProductDetails;
