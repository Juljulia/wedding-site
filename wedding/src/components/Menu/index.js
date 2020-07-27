import React from "react";
import styled from "styled-components";
import client from "../../functions/contentful";
import { Link } from "@reach/router";


const MenuStyled = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;

  a {
    margin: 0 10px;
    text-decoration: underline;
    text-transform: uppercase;
  }

  a:hover,
  a:focus {
    color: orange;
    border: none;
  }
`;

const Menu = () => {
    const [pages, setPages] = React.useState(null);

    React.useEffect(() => {
        client
          .getEntries({
            content_type: "page",
          })
          .then((entries) => {
            setPages(entries.items);
        });
    }, []);

    return (
      <MenuStyled>
      {pages &&
        pages.map((page, i) => {
          return (
            <Link 
                key={i}
                to={page.fields.slug}>
                {page.fields.menuTitle}
            </Link>
          );
        })}
      </MenuStyled>
    );
};
export default Menu;