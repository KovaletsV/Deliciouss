import Pages from "./components/pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav>
                    <GiKnifeFork />
                    <Logo to={"/"}>delicious</Logo>
                </Nav>
                <Search />
                <Category />
                <Pages />
            </div>
        </Router>
    );
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "MonteCarlo", cursive;
`;

const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg {
        font-size: 2rem;
    }
`;
export default App;
