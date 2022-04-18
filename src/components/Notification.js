import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';

// const Notification = ({ type, message }) => {

const Notification = (props) => {
    const dispatch = useDispatch()
    const notification = useSelector((state) => state.ui.notification)

    const handleChange = () => {
        dispatch(uiActions.notification({
            open: false
        }))
    }
    return (
        <div>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {notification && <Alert onClose={handleChange} severity={props.type} >{props.message}</Alert>}

            </Stack>
        </div>
    )
}

export default Notification