import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { House } from '../../types/House';

interface DataTableProps {
    rows: House[];
    columns: GridColDef[];
    height: number;
    width: string;
    pageSize: number;
}

export default function DataTable(props: DataTableProps) {
    const {rows, columns, height, width, pageSize} = props;

  return (
    <div style={{ height, width }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
