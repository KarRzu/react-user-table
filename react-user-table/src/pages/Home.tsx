import { BrowserRouter } from "react-router-dom";
import { Table } from "../components/shared/Table";

export function Home() {
  return (
    <>
      <BrowserRouter></BrowserRouter>
      <Table />
    </>
  );
}
