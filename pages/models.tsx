import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';

const Model = () => {
  return (
    <div className="col-lg-6">
      <div className="jb-models-card">
        <div className="jb-models-card-information">
          <h5 className="jb-models-card-information-title">Model Name</h5>
          <div className="jb-models-card-information-description">
            This here is a description of the model and is defined by the model
            owner.
          </div>
          <div className="jb-models-card-information-buttons">
            <button className="jb-models-card-information-button">
              Browse All
            </button>
            <button className="jb-models-card-information-button">
              Manage
            </button>
          </div>
        </div>
        <div className="jb-models-card-meta">
          <div className="jb-models-card-meta-icon">
            <i className="bi-handbag-fill"></i>
          </div>
          <div className="jb-models-card-meta-information">237 Products</div>
          <div className="jb-models-card-meta-information">11 Fields</div>
        </div>
      </div>
    </div>
  );
};

const Models = ({ models }: any) => {
  return (
    <Layout>
      <PageHeader
        title="Models"
        button="Create Model"
        onButtonClick={() => {}}
      />
      <div className="jb-models-container row">
        <Model />
        <Model />
        <Model />
        <Model />
        <Model />
        <Model />
        <Model />
      </div>
    </Layout>
  );
};

export default Models;
