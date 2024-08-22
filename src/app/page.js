import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="primary">Primary</Button> {""}
      <Cabecalho titulo="rafael" sub="nobre" />
      <Cabecalho titulo="rodrigo" sub="nobre" />
      <Cabecalho titulo="pedro" sub="nobre" />
      <Cabecalho titulo="suzana" sub="nobre" />
      <Link href="/fundamentos">Página Fundamentos</Link> <br />
    </main>
  );
}
