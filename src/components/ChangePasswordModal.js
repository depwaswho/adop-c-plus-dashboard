import React, { useState } from 'react';
import { 
    Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle,
    Input, InputLabel, InputAdornment, FormControl, IconButton
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

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
