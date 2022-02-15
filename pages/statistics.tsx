import Layout from "@components/Layout";
import PageHeader from "@components/PageHeader";

const Stats = () => (
  <Layout>
    <PageHeader title="Statistics">
      <select className="jb-statistics-views">
        <option>Application Metrics</option>
        <option>Content Metrics</option>
        <option>Analytics</option>
        <option>Jambook Logs</option>
      </select>
    </PageHeader>
  </Layout>
);

export default Stats;
