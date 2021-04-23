import ProfileInfo from "./components/ProfileInfo";
import RepoComponent from "./components/RepoComponent";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Container>
        <StyledProfileIndo>
          <ProfileInfo />
        </StyledProfileIndo>
        <StyledRepoComponent>
          <RepoComponent />
        </StyledRepoComponent>
      </Container>
    </div>
  );
}

const Container = styled.div`
  padding: 0rem 7rem 0rem 7rem;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0rem 2rem 0rem 2rem;
  }
`;

const StyledProfileIndo = styled.div`
  flex: 1;
  width: 30%;
  padding: 2rem;
  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    padding: 1rem 0rem 1rem 0rem;
  }
`;

const StyledRepoComponent = styled.div`
  flex: 3;
  @media (max-width: 768px) {
    flex: 1;
  }
`;

export default App;
