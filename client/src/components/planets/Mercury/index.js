import './style.css';

function Mercury() {
	return (
		<div id='mercury' className='planet'>
			<div className='surface'>
				<div id='mercury-surface-color-1' className='surface-color-gray'></div>
				<div id='mercury-surface-color-2' className='surface-color-gray'></div>
				<div id='mercury-surface-color-3' className='surface-color-white'></div>
				<div id='mercury-surface-color-4' className='surface-color-white'></div>
			</div>

			<div className='hazey-border mercury-border'>
				<div className='hazey-border-inset mercury-border-inset'>
					<div className='shadow'></div>
				</div>
			</div>
		</div>
	);
}

export default Mercury;
