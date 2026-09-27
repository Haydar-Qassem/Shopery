import React from "react";
import { ColumnWrapper } from "./styles";

function FooterColumn({ title, links }) {
  return (
    <ColumnWrapper>
      <h3>{title}</h3>

      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </ColumnWrapper>
  );
}

export default FooterColumn;
