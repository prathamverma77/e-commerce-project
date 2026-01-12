import React from "react";
import Layout from "../../components/Layouts/Layout";
import AdminMenu from "../../components/Layouts/AdminMenu";

const Users = () => {
  return (
    <Layout title="All Users">
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>

          <div className="col-md-9">
            <h1 className="text-center">All Users</h1>
            <p className="text-center text-muted">
              Users list will appear here
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;