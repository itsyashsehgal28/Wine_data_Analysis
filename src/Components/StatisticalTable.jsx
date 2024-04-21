import React from "react";
import { Table } from "@mantine/core";

const StatisticalTable = ({ title, data }) => {
  // Extract class names from the data
  const classNames = Object.keys(data.mean);

  // Generate rows
  const rows = Object.keys(data).map((measure, measureIndex) => (
    <Table.Tr key={measureIndex}>
      <Table.Td style={{ fontWeight: "bold" }}>
        {title} {measure}
      </Table.Td>
      {classNames.map((className, classIndex) => (
        <Table.Td key={classIndex} style={{ textAlign: "center" }}>
          {data[measure][className].toFixed(3)}
        </Table.Td>
      ))}
    </Table.Tr>
  ));

  // Generate table
  return (
    <div style={{ margin: "20px auto", textAlign: "center" }}>
      <h1>{title}</h1>
      <Table
        style={{ width: "50%", margin: "auto", borderCollapse: "collapse" }}
        size="xl">
        <Table.Thead>
          <Table.Tr>
            <Table.Th
              style={{ fontWeight: "bold", borderBottom: "2px solid #000" }}>
              Measure
            </Table.Th>
            {classNames.map((className, index) => (
              <Table.Th key={index} style={{ borderBottom: "2px solid #000" }}>
                Class {className}
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};

export default StatisticalTable;

