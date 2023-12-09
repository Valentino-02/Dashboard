'use client'

import React from "react";
import scss from "@/styles/TransactionPerDay.module.scss";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";

interface TransactionCardProps {
  title: string,
  value: number,
  percentage: number
}

const TransactionCard = ({ title, value, percentage} : TransactionCardProps) => {
  const theme = useTheme();
  return (
    <Card className={scss.card} variant={"outlined"}>
      <div className={scss.cardTitle}>
        <Typography>
          {title}
        </Typography>
      </div>
      <div className={scss.cardValue}>
        <Typography>
          {value}
        </Typography>
        <Typography color={theme.palette.success.main} fontSize={14}>
          {`${percentage} %`}
        </Typography>
      </div>
    </Card>
  )
}

export default TransactionCard