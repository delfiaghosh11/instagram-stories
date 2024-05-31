import { useState } from "react";

import { Navigation } from "./Navigation";
import { Story } from "./Story";
import { StoriesPanel } from "./StoriesPanel";

import "./styles.css";

const App = () => {
  const [renderStory, setRenderStory] = useState(false);

  return (
    <div className="App">
      {renderStory ? (
        <Story />
      ) : (
        <>
          <Navigation />
          <StoriesPanel setRenderStory={setRenderStory} />
        </>
      )}
    </div>
  );
};

export default App;
