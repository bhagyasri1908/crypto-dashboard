import CoinTable from "../components/CoinTable";
import Highlights from "../components/Highlights";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Crypto Dashboard</h1>
      <Highlights />
      <CoinTable />
    </div>
  );
}
