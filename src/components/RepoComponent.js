import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import SingleRepo from "./SingleRepo";
import Navbar from "./Navbar";

const RepoComponent = () => {
  const [repos, setRepos] = useState([{}]);
  const [ogRepos, setOgRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState([]);
  const [inpSelect, setInpSelect] = useState("");

  useEffect(() => {
    Axios.get("https://api.github.com/users/supreetsingh247/repos").then(
      (res) => {
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
      let filteredSel = ogRepos.filter(
        (repo) => repo.language === e.target.value
      );
      setRepos(filteredSel);
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
      <Navbar />
      <SearchFilter>
        <input
          type="text"
          placeholder="  Search Repositories"
          value={search}
          onChange={onSearch}
        />

        <select>
          <option value="">Type</option>
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

const SearchFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 1rem 0;
  border-bottom: 0.1rem solid lightgray;

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
