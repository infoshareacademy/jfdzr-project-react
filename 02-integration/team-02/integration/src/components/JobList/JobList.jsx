import array from "../../data.json";
import Avatar from "./JobPosition/Avatar/Avatar";
import Technology from "./JobPosition/Technology/Technology";
import JobDescription from "./JobPosition/JobDescription/JobDescription";
import React from "react";

function JobList() {
  return (
    <div>
      {array.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <h1>{item.company}</h1>
            <Avatar logo={item.logo} alt={item.company} />
            <JobDescription data={item} />
            <Technology tech={item.languages} />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default JobList;
