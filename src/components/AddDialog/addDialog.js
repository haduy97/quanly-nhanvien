import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import UserIcon from "../AddDialog/usericon.png";
import MenuItem from "@material-ui/core/MenuItem";

const roles = [
  {
    label: "Nhân viên",
    value: 1
  },
  {
    label: "Trưởng phòng",
    value: 2
  },
  {
    label: "Giám đốc",
    value: 3
  }
];

const AddDialog = (props) => {
  const {
    users,
    setUsers,
    inputText,
    setInputText,
    openAdd,
    setOpenAdd
  } = props;

  const _onChangeText = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputText({ ...inputText, [name]: value });
  };
  const _onAdd = () => {
    const newItem = { ...inputText };
    setUsers([...users, newItem]);
    setOpenAdd(false);
  }

  // const allLetter= (inputtxt) => {
  //   const letters = /^[A-Za-z]+$/;
  //   if (inputtxt.value.match(letters)) {
  //     alert("Your name have accepted : you can try another");
  //     return true;
  //   } else {
  //     alert("Please input alphabet characters only");
  //     return false;
  //   }
  // }
  return (
    <div>
      <Dialog open={openAdd} onClose={() => setOpenAdd(false)}>
        <DialogTitle align="center">
          <img src={UserIcon} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField type="text" label="Name" name="username" onChange={_onChangeText} />
            <br />
            <TextField type="password" label="Password" name="password" onChange={_onChangeText} />
            <br />
            <TextField type="text" label="Email" name="email" onChange={_onChangeText} />
            <br />
            <TextField
              select
              label="Chọn chức vụ"
              name="role"
              className="select-role"
              value={inputText.role ? inputText.role : 3}
              onChange={_onChangeText}
            >
              {roles.map(option => (
                <MenuItem value={option.value}>{option.label}</MenuItem>
              ))}
            </TextField>
            <br />
            <TextField type="number" label="Số ngày làm" name="workDays" onChange={_onChangeText} />
            <br />
            <TextField type="number" label="Lương theo ngày" name="payPerDay" onChange={_onChangeText} />
            <br />
            <TextField type="number" label="Phụ cấp" name="allowance" onChange={_onChangeText} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAdd(false)} color="secondary">
            trở về
          </Button>
          <Button color="primary" onClick={_onAdd} autoFocus>
            tạo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddDialog;
