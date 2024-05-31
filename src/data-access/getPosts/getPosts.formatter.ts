import _, { groupBy } from "lodash";

import { RawResponseType } from "./getPosts.model";

const cleanupGetPosts = (rawData: RawResponseType) => {
  const result = _(rawData)
    .groupBy((x) => x.userId)
    .map((value, key) => ({ userId: key, posts: value }))
    .value();

  return {
    postsByUsers: result,
  };
};

export default cleanupGetPosts;
