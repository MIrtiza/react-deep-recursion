import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <>
        <span onClick={() => setExpand(!expand)}>
          {explorer.name} <br />{" "}
        </span>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
          {explorer.items.map((exp, ind) => {
            return (
              <>
                <Folder explorer={exp} key={ind} />
              </>
            );
          })}
        </div>
      </>
    );
  } else {
    return <span> {explorer.name} </span>;
  }
};

export default Folder;
