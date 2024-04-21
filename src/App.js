import React, { Component, Fragment } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
//Dashboard can ultimatley be deleted as it just includes a timer, metrics, and a table which can all be redone with Productivity
import Dashboard from "./Components/Dashboard/Dashboard";
//Goal seems to just show charts
import Goal from "./Components/Goal/Goal";
import Finance from "./Components/Finance/Finance";
import Diet from "./Components/Diet/Diet";
//this is the main table to keep in mind
import Productivity from "./Components/Productivity/Productivity";
import Recurring from "./Components/Recurring/Recurring";
import Write from "./Components/Write/Write";
//this was going to be a new list
import Insight from "./Components/Insight/Insight";
import WIP from "./Components/WIP/WIP";
import "./App.scss";
import Sandbox from "./Components/Sandbox/Sandbox";
import Calendar from "./Components/Calendar/Calendar";
import Quantified from "./Components/Quantified/Quantified";
import CompletedTasks from "./Components/CompletedTasks/CompletedTasks";
import AirTable from "./Components/Atomic/Pages/AirTable";

const navigation_array = [
	{
		name: "Overall",
		array: [
			{ name: "Dashboard", url: "Dashboard" },
			{ name: "Goal", url: "Goal" },
			{ name: "Insight", url: "Insight" },
			{ name: "WIP", url: "WIP" },
			{ name: "Finance", url: "Finance" },
			{ name: "Diet", url: "Diet" },
			{ name: "Productivity", url: "Productivity" },
			{ name: "Recurring", url: "Recurring" },
			{ name: "Write", url: "Write" },
		],
		favicon: "fa fa-help",
	},
];
const App = (props) => (
	<div id="wrapper" style={{ backgroundColor: "#2f4050" }}>
		<HashRouter>
			<Fragment>
				{/* <Navigation navigation_array={navigation_array} /> */}
				<div id="page-wrapperX" className="gray-bg">
					<Switch>
						<Route exact path="/" component={Productivity} />
						<Route exact path="/Insight" component={Insight} />
						<Route
							exact
							path="/CompletedTasks"
							component={CompletedTasks}
						/>

						<Route
							exact
							path="/Quantified"
							component={Quantified}
						/>
						<Route exact path="/WIP" component={WIP} />
						<Route exact path="/Finance" component={Finance} />
						<Route exact path="/Sandbox" component={Sandbox} />
						<Route exact path="/Calendar" component={Calendar} />
						<Route exact path="/Diet" component={Diet} />
						<Route
							exact
							path="/Productivity"
							component={Productivity}
						/>
						<Route exact path="/Recurring" component={Recurring} />
						<Route exact path="/Write" component={Write} />
						<Route exact path="/Goal" component={Goal} />
						<Route exact path="/Dashboard" component={Dashboard} />
						<Route exact path="/AirTable" component={AirTable} />
					</Switch>
				</div>
			</Fragment>
		</HashRouter>
	</div>
);

export default App;
