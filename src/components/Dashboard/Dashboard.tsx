import { Box } from "@mui/material";
import DataSummary from "@/components/Dashboard/DataSummary/DataSummary";
import TransactionsPerDay from "@/components/Dashboard/Transactions/TransactionPerDay";
import TransactionBottomRow from "@/components/Dashboard/Transactions/TransactionBottomRow";
import Grid from "@mui/material/Grid";

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        <DataSummary/>
        <TransactionsPerDay />
      </Grid>
      <TransactionBottomRow />
    </Box>
  );
};
export default Dashboard;