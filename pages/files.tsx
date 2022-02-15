import Layout from "@components/Layout";
import PageHeader from "@components/PageHeader";
import { useState } from "react";

interface FileProps {}

const File = ({}: FileProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <tr className={checked === true ? "jb-table-row-selected" : ""}>
      <td className="row-center" width="5%">
        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      </td>
      <td>
        <img src="https://images.ctfassets.net/17ixjyhbsigl/5t1ksQoCLdweGLeFX9nilS/af194d129e923941e8dd969412ff5a99/the-last-of-us-2-ellie-i76718_1.png" />
      </td>
      <td width="30%">The Last of Us Part II Cover Image</td>
      <td width="15%">1280px x 720px</td>
      <td width="15%">Image - PNG</td>
      <td width="20%">Feb 13, 2022 9:18PM</td>
      <td width="10%">
        <div className="jb-tag">Published</div>
      </td>
    </tr>
  );
};

const Files = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <Layout>
      <PageHeader
        title="Files"
        button="Upload File"
        onButtonClick={() => {}}
        search={search}
        onChangeSearch={setSearch}
        searchProps={{ placeholder: "Search Files..." }}
      />
      <table className="jb-table">
        <tr>
          <th className="row-center">
            <input type="checkbox" />
          </th>
          <th>Preview</th>
          <th>Name</th>
          <th>Properties</th>
          <th>Type</th>
          <th>Uploaded</th>
          <th>Status</th>
        </tr>

        <File />
        <File />
        <File />
        <File />
        <File />
        <File />
        <File />
        <File />
        <File />
        <File />
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

export default Files;
