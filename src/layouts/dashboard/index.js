/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";

// Images
import Icon1 from "../../assets/images/bruce-mars.jpg";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={4}>
        <MDBox mt={4.5}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={4}>
                <ReportsBarChart
                  color="info"
                  title="Seed 3d"
                  description="Imbibed and cold treated seeds."
                  date="View Dataset"
                  icon={Icon1}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="success"
                  title="Seed 425d"
                  description="Light exposed germinated seeds timed with radical emergence."
                  date="View Dataset"
                  icon={Icon1}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="dark"
                  title="Seedling 6d"
                  description="Three-day-old light grown seedlings."
                  date="View Dataset"
                  icon={Icon1}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="primary"
                  title="Seedling 9d"
                  description="Six-day-old light grown seedlings."
                  date="View Dataset"
                  icon={Icon1}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="primary"
                  title="Seedling 15d"
                  description="12-day-old light grown seedlings."
                  date="View Dataset"
                  icon={Icon1}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="dark"
                  title="Rosette 21d"
                  description="21-day-old rosette."
                  date="View Dataset"
                  icon={Icon1}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="success"
                  title="Rosette 30d"
                  description="27-day-old fully expanded rosette immediately prior to bolting."
                  date="View Dataset"
                  icon={Icon1}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Stem"
                  description="Stem inflorescence tissue harvested at the stem base, the final internode junction, and above the final internode junction."
                  date="View Dataset"
                  icon={Icon1}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={4}>
                <ReportsBarChart
                  color="info"
                  title="Flower"
                  description="Flower tissue harvested directly below the receptacle. Flower developmental stages range from unopened buds to fully mature flowers."
                  date="View Dataset"
                  icon={Icon1}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="success"
                  title="Silique"
                  description="Silique tissue harvested directly below the pedicel. Silique developmental stages range from elongating siliques to fully mature siliques, immediately prior to yellowing."
                  date="View Dataset"
                  icon={Icon1}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="dark"
                  title="Seed 3d"
                  description="Imbibed and cold treated seeds."
                  date="View Dataset"
                  icon={Icon1}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="primary"
                  title="Seed 3d"
                  description="Imbibed and cold treated seeds."
                  date="View Dataset"
                  icon={Icon1}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
