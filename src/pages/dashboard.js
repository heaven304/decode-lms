import Layout from "../components/Layout/layout";

function Dashboard() {
    return (
        <Layout>
            <div className="content-main-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-title-info">
                                <h1>My Company</h1>
                                <p>View company information and account details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
