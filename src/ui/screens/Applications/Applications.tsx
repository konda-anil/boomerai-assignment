import React, { useState } from "react";
import { getVulnerabilities } from "../Vulnerability/Vulnerability.api";
import { Vulnerability } from "../Vulnerability/Vulnerablility.type";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { VulnerabilityContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import ApplicationListComponent from "./ApplicationList";

const ApplicationsComponent = () => {
  const [vulnerabilities, setVulnerabilities] = useState<
    Vulnerability[] | null
  >();
  if (!vulnerabilities) {
    getVulnerabilities().then((response) => {
      console.log("res::", response);
      setVulnerabilities(response);
    });
  }

  const groupVulnerabilities = (vuls: Vulnerability[]): Vulnerability[][] => {
    const vMap: Map<string, Vulnerability[]> = new Map();
    vuls.forEach((vul) => {
      if (vMap.get(vul.vuln_name)) {
        vMap.set(vul.vuln_name, [...(vMap.get(vul.vuln_name) ?? []), vul]);
      } else {
        vMap.set(vul.vuln_name, [vul]);
      }
    });
    const vulGroups = [];
    for (const value of vMap.values()) {
      vulGroups.push(value);
    }
    return vulGroups;
  };
  return (
    <>
      {vulnerabilities ? (
        <VulnerabilityContainer>
          <Paper className="table-container">
            <TableContainer sx={{ maxHeight: 550 }}>
              <Table
                stickyHeader
                aria-label="sticky table"
                className="vul-table"
              >
                <TableHead className="table-head">
                  <TableRow
                    style={{ backgroundColor: "var(--background-color)" }}
                  >
                    <TableCell align="left" colSpan={2}>
                      Application Name <FontAwesomeIcon icon={faSort} />
                    </TableCell>
                    <TableCell align="left">
                      Progess <FontAwesomeIcon icon={faSort} />
                    </TableCell>
                    <TableCell align="left">
                      Vulnerabilities <FontAwesomeIcon icon={faSort} />
                    </TableCell>
                    <TableCell align="left">
                      Tested <FontAwesomeIcon icon={faSort} />
                    </TableCell>
                    <TableCell align="right">
                      Action <FontAwesomeIcon icon={faSort} />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="table-body">
                  {groupVulnerabilities(vulnerabilities).map((vul) => (
                    <ApplicationListComponent
                      vulGroup={vul}
                      key={vul[0].vuln_name}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </VulnerabilityContainer>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default ApplicationsComponent;
