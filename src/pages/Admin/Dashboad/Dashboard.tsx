import DealsDetails from "./DealsDetails";
import SalesChart from "./SalesChart";
import StatisticalTables from "./StatisticalTables";

function Dashboard() {
    return ( 
        <>
            <StatisticalTables/>
            <SalesChart/>
            <DealsDetails/>
        </>
     );
}

export default Dashboard;