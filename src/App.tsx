import Header from './components/Header/Header';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components'
import { COLORS } from './ColorPalette'
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

// pages
import Home from './pages/Home';

const theme = {
	colors: COLORS
}

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<BrowserRouter>
					<Header />

					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>

		</>
	);
}

export default App;
