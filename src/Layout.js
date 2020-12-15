import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Navbar />, div);
// });

export const Layout = () => {
	//const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
					<Navbar />
					<Home />
					<Skills />
					<Projects />
		</div>
	);
};

export default Layout;
