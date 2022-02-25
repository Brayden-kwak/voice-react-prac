import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from './styles';

const List = () => {

  const classes = useStyles();

  const transaction = [
      { id: 1, type: "Income", category: "Salary", amount: 50, date: "Wed Dec 15" },
      { id: 1, type: "Expense", category: "Business", amount: 150, date: "Wed Dec 25" },
      { id: 1, type: "Income", category: "Salary", amount: 50, date: "Wed Dec 30" }
  ];

  return (
    <MUIList dense={false} className={classes.list}>
        {transaction.map((transaction) => (
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label='delete' onClick="">
                            <Delete/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
    </MUIList>
  )
}

export default List