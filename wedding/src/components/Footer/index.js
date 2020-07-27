import React from "react";
import styled from "styled-components";
import client from "../../functions/contentful";


const FooterStyled = styled.footer`
    height: 350px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
    }
`;

const Footer = () => {
    const [footer, setfooter] = React.useState(null);

    React.useEffect(() => {
        client
          .getEntries({
            content_type: "footer",
          })
          .then((entries) => {
            setfooter(entries.items[0]);
        });
    }, []);

    return (
        <FooterStyled>
            {footer && 
                <div>
                    <img src={footer.fields.image.fields.file.url} alt="footer"></img>
                </div>
            }
        </FooterStyled>
    );
};
export default Footer;