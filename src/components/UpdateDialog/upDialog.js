import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import UpdateIcon from "../UpdateDialog/updateicon.png";
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

const UpDialog = props => {
  const {
    users,
    setUsers,
    openUp,
    setOpenUp,
    inputText,
    setInputText,
    selectedUp,
    setSelectedUp
  } = props;

  const _onChangeText = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputText({ ...inputText, [name]: value });
  };

  const _onUpdate = () => {
  const _newItem = users.map(user => {
    if(user.username === inputText.username){
      return {...inputText};
    }
    return user;
  });
  setUsers(_newItem);
  setOpenUp(false);
}
  

  return (
    <div>
      <Dialog open={openUp} onClose={() => setOpenUp(false)}>
        <DialogTitle align="center">
          <img src={UpdateIcon} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              disabled
              type="text"
              label="Name"
              name="username"
              value={inputText.username}
              onChange={_onChangeText}
            />
            <br />
            <TextField
              type="password"
              label="Password"
              name="password"
              value={inputText.password}
              onChange={_onChangeText}
            />
            <br />
            <TextField
              type="text"
              label="Email"
              name="email"
              value={inputText.email}
              onChange={_onChangeText}
            />
            <br />
            <TextField
              select
              label="Chọn vị trí"
              name="role"
              className="select-role"
              value={inputText.role}
              onChange={_onChangeText}
            >
              {roles.map(option => (
                <MenuItem value={option.value}>{option.label}</MenuItem>
              ))}
            </TextField>
            <br />
            <TextField type="number" label="Số ngày làm" name="workDays" value={inputText.workDays} onChange={_onChangeText} />
            <br />
            <TextField type="number" label="Lương theo ngày" name="payPerDay" value={inputText.payPerDay} onChange={_onChangeText} />
            <br />
            <TextField type="number" label="Phụ cấp" name="allowance" value={inputText.allowance} onChange={_onChangeText} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenUp(false)} color="secondary">
            trở về
          </Button>
          <Button
            color="primary"
            onClick={() => _onUpdate(selectedUp)}
            autoFocus
          >
            cập nhật
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpDialog;
