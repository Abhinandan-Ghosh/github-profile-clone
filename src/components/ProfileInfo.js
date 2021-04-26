import { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

const ProfileInfo = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    Axios.get("https://api.github.com/users/supreetsingh247").then((res) => {
      //   console.log(res.data);
      setUserData(res.data);
    });
  }, []);
  return (
    <UserBio>
      <img src={userData.avatar_url} alt="" />

      <UserInfGrp1>
        <h2>{userData.name}</h2>
        <p>{userData.login}</p>
      </UserInfGrp1>

      <UserInfGrp2>
        <p>{userData.bio}</p>
        <button>Edit Bio</button>
      </UserInfGrp2>

      <UserInfGrp3>
        <p>
          <FaBuilding />
          {userData.company}
        </p>
        <p>
          <FaMapMarkerAlt />
          {userData.location}
        </p>
      </UserInfGrp3>
    </UserBio>
  );
};

const UserBio = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.1rem solid lightgray;

  img {
    border-radius: 5px;
  }
`;

const UserInfGrp1 = styled.div`
  padding: 1rem 0rem 1rem 0rem;
  p {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 0rem 1rem 0rem;
  }
`;

const UserInfGrp2 = styled.div`
  p {
    padding: 1rem 0rem 1rem 0rem;
    font-size: 0.8rem;
  }
  button {
    width: 90%;
    padding: 0.3rem 0rem 0.3rem 0rem;
  }
`;

const UserInfGrp3 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem 1rem 0rem;
`;

export default ProfileInfo;
