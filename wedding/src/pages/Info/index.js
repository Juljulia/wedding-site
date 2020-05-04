import React from "react";
import client from "../../functions/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Card from "../../components/Card";
import styled from "styled-components";


const StyledContainer= styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const InfoPage = () => {
  const [infoCards, setInfoCards] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "infoCard",
      })
      .then((entries) => {
        setInfoCards(entries.items);
      });
  }, []);

  return (
    <StyledContainer>      
      {infoCards &&
        infoCards.map((card, i) => {
          return (
            <Card
              key={i}
              title={card.fields.title}
              image={card.fields.image.fields.file.url}
              text={documentToReactComponents(card.fields.text)}
            />
          );
        })}
    </StyledContainer>
  );
};

export default InfoPage;
