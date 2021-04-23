import React from "react";
import styled from "styled-components";
import { FaRocket } from "react-icons/fa";
const SingleRepo = ({ repo }) => {
  return (
    <RepoStyled>
      <h1> {repo.name}</h1>
      <p>{repo.description}</p>
      <div className="tags">
        <div>
          <FaRocket /> {repo.language}
        </div>
        {/* Months ago */}
        <div>{repo.license && repo.license.name}</div>
      </div>
    </RepoStyled>
  );
};

const RepoStyled = styled.div`
  padding: 1rem 0rem 1rem 0rem;
  border-bottom: 0.1rem solid lightgray;
  h1 {
    margin-bottom: 1rem;
  }
  .tags {
    display: flex;
    padding: 0.7rem 0rem 0.7rem 0rem;
    div {
      margin-right: 1rem;
    }
  }
`;

export default SingleRepo;
