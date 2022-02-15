import Layout from "@components/Layout";
import PageHeader from "@components/PageHeader";
import { useState } from "react";

interface UserProps {}

const User = ({}: UserProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <tr className={checked === true ? "jb-table-row-selected" : ""}>
      <td className="row-center" width="5%">
        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      </td>
      <td width="15%">Sampan Verma</td>
      <td width="30%">sampan@developer@gmail.com</td>
      <td width="15%">samlovescoding</td>
      <td width="20%">Feb 13, 2022 9:18PM</td>
      <td width="10%">
        <div className="jb-tag">Unapproved</div>
      </td>
    </tr>
  );
};

const Users = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <Layout>
      <PageHeader
        title="Users"
        search={search}
        onChangeSearch={setSearch}
        searchProps={{ placeholder: "Search Users..." }}
      />
      <table className="jb-table">
        <tr>
          <th className="row-center">
            <input type="checkbox" />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Account Created</th>
          <th>Role</th>
        </tr>

        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </table>

      <div className="jb-pagination">
        <button className="jb-pagination-button jb-pagination-button-action jb-pagination-button-previous">
          Previous
        </button>
        <button className="jb-pagination-button jb-pagination-button-page ">3</button>
        <button className="jb-pagination-button jb-pagination-button-page jb-pagination-button-active">4</button>
        <button className="jb-pagination-button jb-pagination-button-page jb-pagination-button-disabled">5</button>
        <button className="jb-pagination-button jb-pagination-button-action jb-pagination-button-next">Next</button>
      </div>
    </Layout>
  );
};

export default Users;
