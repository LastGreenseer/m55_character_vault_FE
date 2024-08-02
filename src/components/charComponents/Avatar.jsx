import React, { useState } from "react";
import { getAvatar } from "../../utils/fetchAPI";
import styled from "styled-components";

const Avatar = ({ style, seed }) => {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const avatarData = await getAvatar(style, seed);
        setAvatar(avatarData);
      } catch {
        console.error("Error fetching avatar", error);
      }
    };
    fetchAvatar();
  }, [style, seed]);

  //Inserting a raw HTML of a component can expose the application
  //We should consider alternitive methods off applying an avatar from the API
  //Such as refactoring the addCharacter function to assign an avatar on creation
  return (
    <AvatarWrapper>
      {avatar ? (
        <AvatarImage dangerousslySetInnerHTML={{ _html: avatar }} />
      ) : (
        <p>Loading avatar...</p>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
