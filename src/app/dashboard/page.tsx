import LineChart from "./line-chart";

function BarChart() {
    return <h1>Bar Chart Component</h1>;
}

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <LineChart />
            <BarChart />
        </div>
    );
}