import React from 'react';
import Image from 'next/image';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { purple, blue, green, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
  cardRadius: {
    borderRadius: "25px",
    padding: "10px"
  },
  avatar: {
    backgroundColor: (cardInfo) => {
      if (cardInfo.category == "New Leds") {
        return purple[50]
      }
      if (cardInfo.category == "Sales") {
        return blue[100]
      }
      if (cardInfo.category == "Orders") {
        return green[100]
      }
      return yellow[100]
    },
    height: "77px",
    borderRadius: "25px"
  },
  cardHeaderColor: {
    color: (cardInfo) => {
      if (cardInfo.category == "New Leds") {
        return purple[700]
      }
      if (cardInfo.category == "Sales") {
        return blue[700]
      }
      if (cardInfo.category == "Orders") {
        return green[700]
      }
      return yellow[700]
    },
    fontWeight: 600,
    fontSize: "27px"
  },
  cardTitleColor: {
    color: "#43454D",
    fontWeight: 400
  }
})

export default function CardItem({ cardInfo }) {
  const classes = useStyles(cardInfo);

  return (
    <div>
      <Card elevation={0} className={classes.cardRadius}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <Image width='20' height='20' src={cardInfo.icon} />
            </Avatar>}
          title={<Typography className={classes.cardTitleColor}>{cardInfo.title}</Typography>}
          subheader={<Typography className={classes.cardHeaderColor}>{cardInfo.header}</Typography>}
        />
      </Card>
    </div>
  )
}