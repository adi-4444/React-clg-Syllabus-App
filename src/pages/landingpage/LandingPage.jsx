import React, { useState, useEffect } from "react";
import axios from "axios";
import Subject from "./component/Subject";
import "./landingpage.css";

const LandingPage = () => {
	const [year, setYear] = useState("");
	const [sem, setSem] = useState("");
	const [data, setData] = useState("");
	const [filteredSem, setFilteredSem] = useState();

	const yearChangeHandler = (e) => {
		setYear(e.target.value);
		setSem("");
	};

	const semChangeHandler = (e) => {
		setSem(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		checkYearSem();
	};
	const checkYearSem = () => {
		for (let key in data) {
			let value = data[key];
			let y = key;
			if (year === y) {
				if (sem === "SEM1") {
					setFilteredSem(value[0].SEM1);
				} else {
					setFilteredSem(value[1].SEM2);
				}
			}
		}
	};
	useEffect(() => {
		axios("/data/data.json").then((res) => setData(res.data));
	}, []);

	return (
		<div>
			<div className='main-wrapper'>
				<div className='input-div'>
					<h2>Please select YEAR and SEM</h2>
					<form className='form-wrap' onSubmit={submitHandler}>
						<div className='selection-div'>
							<select
								className='select'
								value={year}
								onChange={yearChangeHandler}
							>
								<option
									value=''
									disabled
									style={{ display: "none" }}
								>
									Year
								</option>
								<option value='PUC1'>PUC 1</option>
								<option value='PUC2'>PUC 2</option>
								<option value='E1'>E1</option>
								<option value='E2'>E2</option>
								<option value='E3'>E3</option>
								<option value='E4'>E4</option>
							</select>
							<select
								className='select'
								value={sem}
								onChange={semChangeHandler}
							>
								<option
									value=''
									disabled
									style={{ display: "none" }}
								>
									Sem
								</option>
								<option value='SEM1'>SEM 1</option>
								<option value='SEM2'>SEM 2</option>
							</select>
						</div>
						<div className='btn-div'>
							<button type='submit'>Get</button>
						</div>
					</form>
				</div>
				<Subject filteredSem={filteredSem} />
			</div>
		</div>
	);
};

export default LandingPage;
