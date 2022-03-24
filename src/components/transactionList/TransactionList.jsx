import React from 'react';

// materialUI components
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
// icons
import { Delete, MoneyOff } from '@material-ui/icons';

// styles
import useStyles from './transaction.styles';

const TransactionList = () => {
    const classes = useStyles();

    return (
        <MUIList dense={false} className={classes.list}>

            <Slide direction="down" in mountOnEnter unmountOnExit>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <MoneyOff />
                </Avatar>
                </ListItemAvatar>
                <ListItemText />
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" >
                    <Delete />
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            </Slide>

        </MUIList>

    )
}

export default TransactionList