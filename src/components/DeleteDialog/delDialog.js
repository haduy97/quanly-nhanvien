import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DelIcon from '../DeleteDialog/delete-icon.png';

const DelDialog = (props) => {
  const {
    users,
    setUsers,
    openDel,
    setOpenDel,
    selectedDel,
    setSelectedDel
  } = props;

  const _onDel = (username) => {
    const _delItem = users.filter((user,index) => index !== username );
    setUsers(_delItem);
    setOpenDel(false);
  }
  return (
    <div>
      <Dialog open={openDel} onClose={() => setOpenDel(false)}>
        <DialogTitle align="center">
          <img src={DelIcon} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Bạn có muốn xóa người dùng này ?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDel(false)} color="secondary">
            trở về
          </Button>
          <Button color="primary" onClick={() => {
              _onDel(selectedDel);
          }} autoFocus>
            xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DelDialog;
