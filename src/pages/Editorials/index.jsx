import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { getEditorials } from "../../services/editorials.service";
import { Loading } from "../../components/Loading";
import { Alert, Typography } from "@mui/material";
import styles from "./index.module.css";

const columns = [
	{ field: "id", headerName: "ID", width: 90 },
	{
		field: "editorial",
		headerName: "Editorial",
		width: 150,
		editable: true,
	},
];

export const Editorials = () => {
	const [editorial, setEditorial] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [alert, setAlert] = useState({
		message: "",
		type: "",
		isOpen: false,
	});

	useEffect(() => {
		setIsLoading(true);

		const fetchEditorials = getEditorials();
		fetchEditorials
			.then((languagesResponse) => {
				setEditorial(languagesResponse.editorials);
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
			<Typography paddingLeft={10} variant="h4">Lista de editoriales</Typography>

			<Box className={styles.tableContainer}>
				<DataGrid
					rows={editorial}
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
