import React from "react";
import scss from "@/styles/TransactionPerDay.module.scss";
import { Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import DataChart from "@/components/Dashboard/Transactions/DataChart/DataChart";
import { lineChartData } from "@/util/mockData";
import TransactionCard from "./TransactionCard";

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const TransactionPerDay = () => {
  return (
    <Grid container gap={2} className={scss.wrapper}>
      <Paper className={scss.transactions}>
        <div className={scss.chart}>
          <Typography>TransActions per day</Typography>
          <DataChart type={"line"} data={lineChartData} />
        </div>
        <div className={scss.cardWrapper}>
          <TransactionCard
            title={'Total Products'}
            value={1.275}
            percentage={428.7} 
          />
          <TransactionCard
            title={'Buy-to-detail'}
            value={1.275}
            percentage={428.7} 
          />
          <TransactionCard
            title={'Refunds'}
            value={0}
            percentage={0} 
          />
        </div>
      </Paper>
    </Grid>
  );
};

export default TransactionPerDay;