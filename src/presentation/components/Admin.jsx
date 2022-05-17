import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Container } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import logo from "../../data/weatherImgs/logo.png";
import linkHome from "../../data/api/linkHome";
import Footer from "../layouts/footer";
import { connect } from "react-redux";
import { getListUsersRequest } from "../redux/effects/listUsersEffect";
import { bindActionCreators } from "redux";
import "../scss/mainFrame.scss";


const tableColumns = [
  {
    dataField: "id",
    text: "ID",
    sort: true
  },
  {
    dataField: "name",
    text: "Name",
    sort: true
  },

  {
    dataField: "email",
    text: "Email",
    sort: true
  },
  {
    dataField: "loginDate",
    text: "Registed Time",
    sort: true
  },
];
const defaultSorted = [{
  dataField: 'loginDate',
  order: "desc"
}];

const Admin = ({ propsListUsers, getListUsersRequest }) => {
  const [tableData, setTableData] = useState([]);
  const [email, setEmail] = useState("");

  const [totalUser, setTotalUser] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem("emailAdmin");
    localStorage.removeItem("token");
    document.querySelector("a#homeAdmin").click();
  }

  useEffect(() => {
    const emailAdmin = localStorage.getItem("emailAdmin");
    const password = localStorage.getItem("token");
    if (!emailAdmin || !password) {
      document.querySelector("a#homeAdmin").click();
    }
    if (!!emailAdmin && !!password) {
      getListUsersRequest(emailAdmin, password)
      setEmail(emailAdmin);
    };
    if (propsListUsers.success == 1) {
      // config ID User 
      const listUsers = propsListUsers.data.listUsers;
      const list = [];
      for (let i = 0; i < listUsers.length; i++) {
        const item = listUsers[i];
        const newItem = {
          ...item,
          id: i + 1,
        }
        list.push(newItem);
      }
      setTotalUser(list.length);
      setTableData(list);
    }
  }, [propsListUsers.success, totalUser])




  return (
    <>
      <div id="content">
        <div className="container-fluid">
          <div className="row" style={{ height: "100%" }}>
            <div className="col-2" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "#7a6c7d" }}>
              <div>
                <div style={{ textAlign: "center", height: 80, borderBlockColor: "Highlight" }}>
                  <a id="homeAdmin" href={linkHome}>
                    <img src={logo} width="73" alt="Logo" />
                  </a>
                </div>
                <div className="row ml-2 mt-3">
                  <div className="col btn btn-primary mt-1" >
                    USERS
              </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col text-center">
                  <button className="btn btn-primary" style={{ width: 95 }} onClick={handleLogout}>LOG OUT</button>
                </div>
              </div>
            </div>
            <div className="col-10">
              <Container fluid className="p-0">
                <div className="row mt-1">
                  <div className="col-6 mb-4 ml-2">
                    <h3 style={{ marginTop: 30 }}><i className="fa fa-list" aria-hidden="true"></i> LIST USER</h3>
                  </div>
                  <div className="col-4 offset-2 mt-4">
                    <div className="row mt-2">
                      <div className="col">
                        {!!email ? (
                          <span> Welcome, <b>{email}</b> </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <Card>
                  <CardBody>
                    <BootstrapTable
                      keyField="name"
                      headerWrapperClasses="foo"
                      data={tableData}
                      bootstrap4
                      columns={tableColumns}
                      defaultSorted={defaultSorted}
                      hover
                      bordered
                      pagination={paginationFactory({
                        sizePerPage: 10,
                        hideSizePerPage: true,
                      })
                      }
                    />
                  </CardBody>
                  <CardFooter>
                    <div className="row">
                      <div className="col text-center">
                        - Total Users: {totalUser} -
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    propsListUsers: state.listUsersReducer,
    
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getListUsersRequest,
},
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Admin);