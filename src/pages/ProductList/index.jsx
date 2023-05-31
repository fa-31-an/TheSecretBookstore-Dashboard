import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Nombre',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Descripción',
    width: 150,
    editable: true,
  },
  {
    field: 'subcategory',
    headerName: 'Subcategoría',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];


export const ProducList = () => {
    const [products, setProducts] = useState(null);
    const [isLoading, setIdLoading] = useState(false);
    const [alert, setAlert] = useState({
        message: "",
        type: "",
        isOpen: false,
    });



  return (
    <section>
        <Typography variant="h2" >Lista de productos</Typography>

    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </section>
  );
}