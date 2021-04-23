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
    <ImgBio>
      <img src={userData.avatar_url} alt="" />

      <div className="grp1">
        <h2>{userData.name}</h2>
        <p>{userData.login}</p>
      </div>
      <div className="grp2">
        <p>{userData.bio}</p>
        <button>Edit Bio</button>
      </div>

      <UserInf>
        <p>
          <FaBuilding />
          {userData.company}
        </p>
        <p>
          <FaMapMarkerAlt />
          {userData.location}
        </p>
      </UserInf>
    </ImgBio>
  );
};

const UserInf = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem 1rem 0rem;
`;

const ImgBio = styled.div`
  display: flex;
  flex-direction: column;
  .grp1 {
    padding: 1rem 0rem 1rem 0rem;
    p {
      font-size: 1rem;
    }
  }

  .grp2 {
    p {
      padding: 1rem 0rem 1rem 0rem;
      font-size: 0.8rem;
    }
    button {
      width: 90%;
      padding: 0.3rem 0rem 0.3rem 0rem;
    }
  }

  img {
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    .grp1 {
      padding: 1rem 0rem 1rem 0rem;
    }

    .grp2 {
      p {
        padding: 0.5rem 0rem 0.5rem 0rem;
      }
    }
    border-bottom: 0.1rem solid lightgray;
  }
`;

export default ProfileInfo;
