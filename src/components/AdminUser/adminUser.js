import React, { useState, useEffect } from "react";
import "../AdminUser/ListUser.css";
import { getUser } from "../AdminUser/userData";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddDialog from "../AddDialog/addDialog";
import DelDialog from "../DeleteDialog/delDialog";
import UpDialog from "../UpdateDialog/upDialog";
import axios from "axios";
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const AdminUser = (props) => {
  // const { users } = props
  const [users, setUsers] = useState(() => {
      return getUser();
  });
  const [inputSearch, setInputSearch] = useState("");
  const [inputText, setInputText] = useState("");
  const [openAdd, setOpenAdd] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [openUp, setOpenUp] = useState(false);
  const [selectedDel, setSelectedDel] = useState(null);
  const [selectedUp, setSelectedUp] = useState(null);


  // useEffect(() => {
  //   Axios.get(url).then(json => setUsers(json.data))
  // }, [])


  const _onSearch = e => {
    const value = e.target.value;
    setInputSearch(value);
  };

  const _searchList = users.filter(user => {
    if (!inputSearch) {
      return true;
    }
    const toInputSearch = user.username.toLocaleLowerCase();
    return toInputSearch.indexOf(inputSearch.toLocaleLowerCase()) + 1;
  });

  const _tongLuong = (payPerDay, workDays, allowance, totalSalary) => {
    return (totalSalary = Number(workDays * payPerDay) + Number(allowance));
  };


  return (
    <div>
      <flex className="flex-table">
        <h1 className="tittle">Danh sách</h1>
        <TextField
          type="search"
          className="searchUser"
          label={<SearchIcon />}
          onChange={_onSearch}
        />
      </flex>
      <Fab
        color="primary"
        aria-label="add"
        className="icon-add"
        onClick={() => setOpenAdd(true)}
      >
        <AddIcon />
      </Fab>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                <b>NAME</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>PASSWORD</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>EMAIL</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>CHỨC VỤ</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>SỐ NGÀY LÀM</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>LƯƠNG/NGÀY</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>PHỤ CẤP</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>TỔNG LƯƠNG</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>THAO TÁC</b>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_searchList.map((user, index) => (
              <TableRow key={user.username}>
                <StyledTableCell component="th" scope="row" align="center"  >
                  {user.username}
                </StyledTableCell>
                <StyledTableCell align="center">********</StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center">
                  {(() => {
                    if (user.role === 1) {
                      return <p>Nhân viên</p>;
                    } else if (user.role === 2) {
                      return <p>Trưởng phòng</p>;
                    } else {
                      return <p>Giám đốc</p>;
                    }
                  })()}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.workDays}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.payPerDay} đ
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.allowance} đ
                </StyledTableCell>
                <StyledTableCell align="center">
                  {_tongLuong(
                    user.payPerDay,
                    user.workDays,
                    user.allowance,
                    user.totalSalary
                  )}{" "}
                  VNĐ
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      setOpenUp(true);
                      setSelectedUp(user);
                    }}
                  >
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      setOpenDel(true);
                      setSelectedDel(index);
                    }}
                  >
                    <DeleteIcon color="secondary" />
                  </IconButton>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <AddDialog
        // users={users}
        // setUsers={setUsers}
        inputText={inputText}
        setInputText={setInputText}
        openAdd={openAdd}
        setOpenAdd={setOpenAdd}
      />
      <DelDialog
        // users={users}
        // setUsers={setUsers}
        openDel={openDel}
        setOpenDel={setOpenDel}
        selectedDel={selectedDel}
        setSelectedDel={setSelectedDel}
      />
      <UpDialog
        // users={users}
        // setUsers={setUsers}
        openUp={openUp}
        setOpenUp={setOpenUp}
        inputText={selectedUp ? selectedUp : inputText}
        setInputText={selectedUp ? setSelectedUp : setInputText}
        selectedUp={selectedUp}
        setSelectedUp={setSelectedUp}
      />
    </div>
  );
};

export default AdminUser;
