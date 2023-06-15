import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { getUsers } from "../../services/users.service";
import { Loading } from "../../components/Loading";
import { Alert, Typography } from "@mui/material";
import styles from "./index.module.css";

const columns = [
	{ field: "id", headerName: "ID", width: 90 },
	{
		field: "firstName",
		headerName: "Nombre",
		width: 150,
		editable: true,
	},
	{
		field: "lastName",
		headerName: "Apellido",
		width: 150,
		editable: true,
	},
	{
		field: "email",
		headerName: "Correo",
		width: 150,
		editable: true,
	},
	{
		field: "avatar",
		headerName: "Avatar",
		width: 150,
		editable: true,
	},
];

export const Users = () => {
	const [user, setUser] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [alert, setAlert] = useState({
		message: "",
		type: "",
		isOpen: false,
	});

	useEffect(() => {
		setIsLoading(true);

		const fetchUsers = getUsers();
		fetchUsers	
			.then((languagesResponse) => {
				setUser(languagesResponse.users);
			})
			.catch((error) => {
				console.error(error);

				setAlert({
					message: "Ocurrió un error al obtener la información",
					type: "danger",
					show: true,
				});
			})
			.finally(setIsLoading(false));
	}, []);

	if (isLoading) return <Loading />;

	return (
		<section>
			{alert.isOpen && (<Alert alert={alert} setAlert={setAlert} />)}
			<Typography paddingLeft={10} variant="h4">Lista de idiomas</Typography>

			<Box className={styles.tableContainer}>
				<DataGrid
					rows={user}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 10,
							},
						},
					}}
					pageSizeOptions={[10]}
					checkboxSelection
					disableRowSelectionOnClick
				/>
			</Box>
		</section>
	);
};
