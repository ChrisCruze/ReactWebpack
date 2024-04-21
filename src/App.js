import React, { Component, Fragment } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

const ExamplePage = () => <h1>Example Page</h1>;

const App = (props) => (
	<div id="wrapper" style={{ backgroundColor: "#2f4050" }}>
		<HashRouter>
			<Switch>
				<Route exact path="/" component={ExamplePage} />
			</Switch>
		</HashRouter>
	</div>
);

export default App;
