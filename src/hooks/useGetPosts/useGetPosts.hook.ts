import { useEffect, useState } from "react";

import { getPosts, FormattedResponseType } from "../../data-access";

const useGetPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [posts, setPosts] = useState<FormattedResponseType | null>(null);

  let unmounted = false;
  const serviceCall = async () => {
    if (!unmounted) {
      try {
        const cleanedData = await getPosts();
        setIsLoading(false);
        setPosts(cleanedData);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    serviceCall();

    return () => {
      unmounted = true;
    };
  }, []);

  return { isLoading, posts, isError };
};

export default useGetPosts;
