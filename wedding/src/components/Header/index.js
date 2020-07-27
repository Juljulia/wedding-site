import React from "react";
import styled from "styled-components";
import client from "../../functions/contentful";


const HeaderStyled = styled.header`
    height: 350px;

    div {
        position: relative;
        height: 350px;
    }

    h1 {
        position: absolute;
        bottom: 0;
        width: 100%;
        font-size: 68px;
        z-index: 1;
        text-align: center;
        margin-bottom: 45px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
    }

    @media (max-width: 650px) {
        h1 {
            font-size: 54px;
            margin-bottom: 10px;
        }
        
        img {
           object-fit: contain;
           margin-top: -50px;
        }
    }
`;

const Header = () => {
    const [header, setHeader] = React.useState(null);

    React.useEffect(() => {
        client
          .getEntries({
            content_type: "header",
          })
          .then((entries) => {
            setHeader(entries.items[0]);
        });
    }, []);

    return (
        <HeaderStyled>
            {header && 
                <div>
                    <h1>{header.fields.title}</h1>
                    <img src={header.fields.hero.fields.file.url} alt="header"></img>
                </div>
            }
        </HeaderStyled>
    );
};
export default Header;