import Layout from "@components/Layout";
import PageHeader from "@components/PageHeader";

const Input = () => {
  return (
    <div className="jb-configuration row">
      <div className="col-lg-5">
        <div className="jb-configuration-label">Username</div>
        <small className="jb-configuration-help">Username can not be updated after registration</small>
      </div>
      <div className="col-lg-7">
        <input type="text" className="jb-configuration-input" />
      </div>
    </div>
  );
};

const Settings = () => (
  <Layout>
    <PageHeader title="Settings" />
    <h2 className="jb-configuration-heading">Account Information</h2>
    <Input />
    <Input />
    <Input />
    <Input />
    <div className="row">
      <div className="offset-lg-5 col-lg-7">
        <button className="jb-configuration-button">Change Password</button>
      </div>
    </div>

    <div className="jb-configuration-divider"></div>

    <h2 className="jb-configuration-heading">Jambook Configuration</h2>
    <Input />
    <Input />
    <Input />
    <Input />

    <div className="jb-configuration-divider"></div>

    <h2 className="jb-configuration-heading">Environment Configuration</h2>
    <Input />
    <Input />
    <div className="row">
      <div className="offset-lg-5 col-lg-7">
        <button className="jb-configuration-button">Add Custom Field</button>
      </div>
    </div>
    <div className="jb-configuration-divider"></div>
  </Layout>
);

export default Settings;
