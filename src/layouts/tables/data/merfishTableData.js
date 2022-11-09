/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function data() {
  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "name", accessor: "name", align: "left" },
      { Header: "cluster level", accessor: "cluster", align: "left" },
      { Header: "signature genes", accessor: "gene", align: "center" },
      { Header: "number of cells", accessor: "number", align: "center" },
      { Header: "description", accessor: "action", align: "center" },
    ],

    rows: [
      {
        name: <Job title="Exc" />,
        cluster: <Job title="CellClass" />,
        gene: <Job title="Slc17a7, Lingo1, Sv2b, Neurod6, Kcnma1" />,
        number: <Job title="67472" />,
        action: <Job title="Excitatory neuron" />,
      },
      {
        name: <Job title="Exc" />,
        cluster: <Job title="CellClass" />,
        gene: <Job title="Slc17a7, Lingo1, Sv2b, Neurod6, Kcnma1" />,
        number: <Job title="67472" />,
        action: <Job title="Excitatory neuron" />,
      },
      {
        name: <Job title="Exc" />,
        cluster: <Job title="CellClass" />,
        gene: <Job title="Slc17a7, Lingo1, Sv2b, Neurod6, Kcnma1" />,
        number: <Job title="67472" />,
        action: <Job title="Excitatory neuron" />,
      },
      {
        name: <Job title="Exc" />,
        cluster: <Job title="CellClass" />,
        gene: <Job title="Slc17a7, Lingo1, Sv2b, Neurod6, Kcnma1" />,
        number: <Job title="67472" />,
        action: <Job title="Excitatory neuron" />,
      },
      {
        name: <Job title="Exc" />,
        cluster: <Job title="CellClass" />,
        gene: <Job title="Slc17a7, Lingo1, Sv2b, Neurod6, Kcnma1" />,
        number: <Job title="67472" />,
        action: <Job title="Excitatory neuron" />,
      },
      {
        name: <Job title="Exc" />,
        cluster: <Job title="CellClass" />,
        gene: <Job title="Slc17a7, Lingo1, Sv2b, Neurod6, Kcnma1" />,
        number: <Job title="67472" />,
        action: <Job title="Excitatory neuron" />,
      },
    ],
  };
}
