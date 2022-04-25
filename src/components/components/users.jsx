import React from "react";

const users = [
  {
    srno: 1,
    type: "Distributor",
    loginID: "D001",
    parentID: "DL001",
    fullName: "Xyzzz",
    createdAt: new Date(),
  },
  {
    srno: 2,
    type: "Distributor",
    loginID: "D001",
    parentID: "DL001",
    fullName: "Xyzzz",
    createdAt: new Date(),
  },
  {
    srno: 3,
    type: "Distributor",
    loginID: "D001",
    parentID: "DL001",
    fullName: "Xyzzz",
    createdAt: new Date(),
  },
  {
    srno: 4,
    type: "Distributor",
    loginID: "D001",
    parentID: "DL001",
    fullName: "Xyzzz",
    createdAt: new Date(),
  },
];
const Users = () => {
  return (
    <>
      <div className="table-responsive">
      <center>
        <div style={{width: '50%', backgroundColor:'#e8e8e8', padding:20, fontSize:25, fontWeight: 'bold', marginTop:25}}> Users - View</div>
       <center><table style={{width:'75%',right:0, margin:25,}} className="table  table-hover ">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Type</th>
              <th scope="col">Login ID</th>
              <th scope="col">Parent ID</th>
              <th scope="col">Full Name</th>
              <th scope="col">Created On</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <th scope="row">{user.srno}</th>
                <td>{user.type}</td>
                <td>{user.loginID}</td>
                <td>{user.parentID}</td>
                <td>{user.fullName}</td>
                <td>date</td>
                <td>Action</td>
              </tr>
            ))}
          </tbody>
        </table></center>
        </center>
      </div>
    </>
  );
};

export default Users;
