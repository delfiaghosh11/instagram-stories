import { useEffect, useState } from "react";
import { Container, Figure } from "react-bootstrap";

import "./stories-panel.css";

import { useGetPosts } from "../../hooks";

type StoriesPanelProps = {
  setRenderStory: (value: boolean) => void;
};

const StoriesPanel = ({ setRenderStory }: StoriesPanelProps) => {
  const { isLoading, posts, isError } = useGetPosts();

  useEffect(() => {
    if (!isLoading) {
      console.log("posts", posts);
    }
  }, [isLoading]);

  return (
    <Container fluid className="horizontal-scroll">
      {posts?.postsByUsers.map(({ userId }, index) => (
        <>
          <Figure key={`figure-${index}`} className="mx-2 story-border">
            <Figure.Image
              key={`figure-image-${index}`}
              className="m-1 image-border"
              width={80}
              height={80}
              alt="100x100"
              fluid
              src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
              onClick={() => setRenderStory(true)}
            />
          </Figure>
          {/* <span>User {userId}</span> */}
        </>
      ))}
    </Container>
  );
};

export default StoriesPanel;
