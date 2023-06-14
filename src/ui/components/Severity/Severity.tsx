import { SeverityLevel } from "../../screens/Vulnerability/Vulnerablility.type";
import { SeverityContainer } from "./styles";

type SeverityProps = {
  severityLevels: Map<SeverityLevel, number>;
};

const Severity = ({ severityLevels }: SeverityProps) => {
  return (
    <SeverityContainer>
      {[...severityLevels.keys()].map((severityLevel) => (
        <div className={'sev-container '+severityLevel} key={severityLevel}>
          <div className="label name">{severityLevel[0]}</div>
          <div className="label count">{severityLevels.get(severityLevel)}</div>
        </div>
      ))}
    </SeverityContainer>
  );
};

export default Severity;