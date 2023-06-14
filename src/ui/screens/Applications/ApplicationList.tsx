import React from "react";
import {
  Collapse,
  IconButton,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faCode,
  faCodeBranch,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import TimeAgo from "react-timeago";
import Severity from "../../components/Severity/Severity";
import CircularProgressWithLabel from "../../components/CircularProgress/CircularProgress";
import { getProgressClassName } from "../../utils/utils";
import { NavLink } from "react-router-dom";
import {
  SeverityLevel,
  Vulnerability,
} from "../Vulnerability/Vulnerablility.type";
import { ProgressContainer, TableCellContainer } from "./styles";

type ApplicationListComponenttProps = {
  vulGroup: Vulnerability[];
//   setFilePath: (filePaths: string[]) => void;
};

const ApplicationListComponent = ({
  vulGroup,
}: ApplicationListComponenttProps) => {
  const [open, setOpen] = React.useState(false);

  const getVulnerabilityLevels = (vulGroup: Vulnerability[]) => {
    const levelMap: Map<SeverityLevel, number> = new Map();
    vulGroup.forEach((vul) => {
      const sv: number = levelMap.get(vul.boman_severity) ?? 0;
      levelMap.set(
        vul.boman_severity,
        levelMap.get(vul.boman_severity) ? sv + 1 : 1
      );
    });
    return levelMap;
  };

  const getAVGProgress = (vulGroup: Vulnerability[]): number => {
    return (
      vulGroup.reduce((count, vul) => count + vul.cvss_base_score, 0) /
      vulGroup.length
    );
  };

  const vulName =
    vulGroup[0].vuln_name.split(".")[
      vulGroup[0].vuln_name.split(".").length - 1
    ];
  return (
    <React.Fragment>
      <TableRow style={{ backgroundColor: "var(--white-color)" }}>
        <TableCell align="left" className="first-column">
          <NavLink to={vulGroup[0].vuln_name }>
            <IconButton
              aria-label="expand row"
              size="small"
              //   onClick={() => onExpand(vulName)}
            >
              {open ? (
                <FontAwesomeIcon icon={faAngleDown} />
              ) : (
                <FontAwesomeIcon icon={faAngleRight} />
              )}
            </IconButton>
          </NavLink>
        </TableCell>
        <TableCell align="left" className="group-name">
          <div className="file-name-container">
            <Tooltip title={vulGroup[0].affected_file}>
              <div className="icon-container">
                <FontAwesomeIcon icon={faCodeBranch} />
                <span className="count">{vulGroup.length}</span>
              </div>
            </Tooltip>
            <span>{vulName}</span>
          </div>
        </TableCell>
        <TableCell align="left" style={{ minWidth: "100px" }}>
          <ProgressContainer>
            <LinearProgress
              variant="determinate"
              value={getAVGProgress(vulGroup) * 10}
              style={{ height: "8px", borderRadius: "8px" }}
              className={getProgressClassName(getAVGProgress(vulGroup))}
            />
          </ProgressContainer>
        </TableCell>
        <TableCell align="left">
          <Severity severityLevels={getVulnerabilityLevels(vulGroup)} />
        </TableCell>
        <TableCell align="left">
          <TimeAgo date={vulGroup[0].created_at} />
        </TableCell>
        <TableCell align="right" className="last-column">
          <FontAwesomeIcon icon={faPlusCircle} />
        </TableCell>
      </TableRow>
      <TableRow className="collapsable-row">
        <TableCellContainer colSpan={6} className="child-table-cell">
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table className="child-table">
              <TableBody className="child-table-body">
                {vulGroup.map((vul) => (
                  <TableRow
                    className={"child-table-row" + open ? "" : "closed"}
                    key={vul._id}
                  >
                    <TableCell className="first-column" />
                    <TableCell align="left" className="title-column">
                      <div className="title-container">
                        <div className="icon-container">
                          <FontAwesomeIcon icon={faCode} />
                        </div>
                        <span>{vul.affected_file}</span>
                      </div>
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      <ProgressContainer>
                        <LinearProgress
                          variant="determinate"
                          value={vul.cvss_base_score * 10}
                          style={{ height: "8px", borderRadius: "8px" }}
                        />
                      </ProgressContainer>
                    </TableCell>
                    <TableCell align="left">
                      <CircularProgressWithLabel
                        value={vul.cvss_base_score}
                        minvalue={0}
                        maxvalue={10}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <TimeAgo date={vul.created_at} />
                    </TableCell>
                    <TableCell align="right" className="last-column">
                      <FontAwesomeIcon icon={faPlusCircle} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCellContainer>
      </TableRow>
    </React.Fragment>
  );
};

export default ApplicationListComponent;
