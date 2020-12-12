import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

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
		</div>
	);
};

export default Layout;
