import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import SingleRepo from "./SingleRepo";

const RepoComponent = () => {
  const [repos, setRepos] = useState([{}]);
  const [ogRepos, setOgRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState([]);
  const [inpSelect, setInpSelect] = useState("");

  useEffect(() => {
    Axios.get("https://api.github.com/users/supreetsingh247/repos").then(
      (res) => {
        console.log(res.data);
        setRepos(res.data);
        setOgRepos(res.data);
        let tempSelect = res.data.map((s) => s.language);
        let tempSelectSet = new Set(tempSelect);
        tempSelectSet.delete("");
        tempSelectSet.delete(null);

        setSelect([...tempSelectSet]);
      }
    );
  }, []);

  const onSelect = (e) => {
    setInpSelect(e.target.value);
    if (e.target.value === "All") {
      setRepos(ogRepos);
    } else {
      let sel = ogRepos.filter((repo) => repo.language === e.target.value);
      setRepos(sel);
    }
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setRepos(ogRepos);
    } else {
      let search = ogRepos.filter(
        (repo) => repo.name.indexOf(e.target.value) >= 0
      );
      setRepos(search);
    }
  };

  return (
    <div>
      <Nav>
        <div className="navItem">
          <a href="/">Overview</a>
        </div>
        <div className="navItem Active">
          <a href="/">Repositories</a>
          <span>11</span>
        </div>
        <div className="navItem ">
          <a href="/">Project</a>
        </div>
        <div className="navItem">
          <a href="/">Package</a>
        </div>
      </Nav>

      <SearchFilter>
        <input
          type="text"
          placeholder="  Search Repositories"
          value={search}
          onChange={onSearch}
        />

        <select>
          <option value="">type</option>
        </select>
        <select value={inpSelect} onChange={onSelect}>
          <option value="All">All</option>
          {select.map((s) => (
            <option value={s}>{s}</option>
          ))}
        </select>

        <button>New</button>
      </SearchFilter>

      {repos.map((repo) => (
        <SingleRepo repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

const Nav = styled.div`
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  border-bottom: 0.2rem solid lightgray;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .navItem {
    padding: 1rem 0rem 1rem 0rem;

    span {
      background: #cfcfcf;
      margin-left: 0.5rem;
      padding: 0.1rem;
      border-radius: 45%;
    }
  }
  a {
    text-decoration: none;
    color: #000;
  }

  .Active {
    border-bottom: 0.1rem solid red;
  }
`;

const SearchFilter = styled.div`
  display: flex;
  * {
    padding: 0.5rem 0rem 0.5rem 0rem;
  }

  button {
    width: 10%;
    background: #2c974b;
    color: white;
    border: 0;
    @media (max-width: 768px) {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    * {
      margin: 0.5rem 0rem 0.5rem 0rem;
    }
  }
  justify-content: space-between;
  padding: 1rem 0 1rem 0;
  border-bottom: 0.1rem solid lightgray;

  input {
    width: 50%;
    border: 1px solid;
    border-color: #d6d6d6;
    border-radius: 5px;
    font-size: 1rem;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  select {
    width: 15%;
    border-color: #d6d6d6;
    border-radius: 5px;
    font-size: 1rem;
    @media (max-width: 768px) {
      width: 100%;
    }
    option {
      height: 1rem;
    }
  }
`;

export default RepoComponent;
