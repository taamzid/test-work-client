import React, { useEffect, useState } from "react";
import "./testworkcompose.css";

const Record = (props) => (
  <div className="NS">
    <h3>{props.record.name}</h3>
    <h3>{props.record.sector}</h3>
  </div>
);

const TestWorkCompose = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://test-work-server.vercel.app/users`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records, records.length]);

  function recordList() {
    return records.map((record) => {
      return <Record record={record} key={record._id} />;
    });
  }
  return (
    <div className="recordlist">
      <h1>Record List</h1>
      <div className="NS1">
        <h1 style={{ color: "#bf1650" }}>Name</h1>
        <h1 style={{ color: "#bf1650" }}>Sector</h1>
      </div>
      {recordList()}
    </div>
  );
};

export default TestWorkCompose;
