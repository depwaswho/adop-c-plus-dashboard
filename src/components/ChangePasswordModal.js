import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function ChangePasswordModal(props) {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    return (
        <div>
            <Dialog open={props.isOpen} aria-labelledby="form-dialog-title" maxWidth="xs">
                <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Username"
                        fullWidth
                    />
                    <FormControl fullWidth style={{ margin: '10px 0' }}>
                        <InputLabel htmlFor="old-password">Old Password</InputLabel>
                        <Input
                        id="old-password"
                        type={showOldPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton aria-label="Toggle password visibility" onClick={() => setShowOldPassword(!showOldPassword)}>
                            {showOldPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="new-password">New Password</InputLabel>
                        <Input
                        id="new-password"
                        type={showNewPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton aria-label="Toggle password visibility" onClick={() => setShowNewPassword(!showNewPassword)}>
                            {showNewPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">Cancel</Button>
                    <Button color="primary">Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ChangePasswordModal;
