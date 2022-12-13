import React from "react";
import "./subject.css";

const Subject = ({ filteredSem }) => {
	return (
		<div className='main'>
			<div className='subject-wrapper'>
				{filteredSem?.map((sub, i) => (
					<div key={i}>
						<a href={sub.url} target='_blank' rel='noreferrer'>
							<h3 className='name'>{sub.subject}</h3>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Subject;
