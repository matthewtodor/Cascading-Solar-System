import './style.css';

function Sun() {
	return (
		<div id='sun' className='planet'>
			<div className='surface'>
				<div id='sun-surface-color-1' className='surface-color-orange'></div>
				<div id='sun-surface-color-2' className='surface-color-gray'></div>
				<div id='sun-surface-color-3' className='surface-color-gold'></div>
				<div id='sun-surface-color-4' className='surface-color-yellow'></div>
			</div>

			<div className='hazey-border sun-border'>
				<div className='hazey-border-inset sun-border-inset'>{/* <div className='shadow'></div> */}</div>
			</div>
		</div>
	);
}

export default Sun;
