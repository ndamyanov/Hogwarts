import { useEffect, useState } from "react";
import { StyledTableContainer } from "./styles";
import { fetchHouses } from "../../services/housesService";
import DataTable from "../../ui/DataTable";
import { House } from "../../types/House";
import { GridColDef } from "@mui/x-data-grid";

const Houses = () => {
  const [houses, setHouses] = useState<House[]>([]);

  const fetchData = async () => {
    const data = await fetchHouses();
    setHouses(data);
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
      sortable: true,
      filterable: true,
    },
    {
      field: "animal",
      headerName: "Animal",
      width: 150,
      sortable: false,
      filterable: false,
    },
    {
      field: "ghost",
      headerName: "Ghost",
      width: 200,
      sortable: false,
      filterable: false,
    },
    {
      field: "commonRoom",
      headerName: "Common Room",
      width: 200,
      sortable: false,
      filterable: false,
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledTableContainer>
      <h2>List of Houses</h2>
      <DataTable
        rows={houses}
        columns={columns}
        height={400}
        width="70%"
        pageSize={5}
      />
    </StyledTableContainer>
  );
};

export default Houses;
