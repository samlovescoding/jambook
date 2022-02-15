import Layout from "@components/Layout";
import PageHeader from "@components/PageHeader";
import { useState } from "react";

interface SensitiveDataProps {
  children?: any;
}

const SensitiveData = ({ children }: SensitiveDataProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className={`sensitive ${show && "sensitive-show"}`} onClick={() => setShow(!show)}>
      {children}
    </div>
  );
};

interface ApplicationProps {}

const Application = ({}: ApplicationProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <tr className={checked === true ? "jb-table-row-selected" : ""}>
      <td className="row-center" width="5%">
        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      </td>
      <td width="15%">Website</td>
      <td width="30%">
        <SensitiveData>b64f527232494d63561b14848d5b0ce6</SensitiveData>
      </td>
      <td width="15%">
        <SensitiveData>3126ee338b2438a3853138c7cc0cc4eb</SensitiveData>
      </td>
      <td width="20%">Feb 13, 2022 9:18PM</td>
      <td width="10%">
        <div className="jb-tag">IN USE</div>
      </td>
    </tr>
  );
};

const Applications = () => {
  return (
    <Layout>
      <PageHeader title="Applications" button="Register Application" onButtonClick={() => {}} />
      <table className="jb-table">
        <tr>
          <th className="row-center">
            <input type="checkbox" />
          </th>
          <th>Name</th>
          <th>App ID</th>
          <th>App Key</th>
          <th>Created On</th>
          <th>Status</th>
        </tr>

        <Application />
        <Application />
        <Application />
      </table>
    </Layout>
  );
};

export default Applications;
