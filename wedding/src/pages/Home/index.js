import React from "react";
import client from "../../functions/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const HomePage = () => {
  const [content, setContent] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntry('4lpsYWFQvyUqnwYaXcyKX4')
      .then((entry) => {
        setContent(entry);
      });
  }, []);

  return (
    <div>
      {content && 
        <div>
          <h2>{content.fields.title}</h2>
          {documentToReactComponents(content.fields.content)}
          <img src={content.fields.hero.fields.file.url} alt="heart"></img>
        </div>
      }
    </div>
  );
};

export default HomePage;
