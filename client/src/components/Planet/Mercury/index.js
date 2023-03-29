import './style.css';

function Mercury({ scale }) {
	return (
		<div className='planet-scale' style={{ transform: `scale(${scale / 100})` }}>
			<div id='mercury' className='planet'>
				{scale >= 10 && (
					<div className='surface' style={{ opacity: scale / 200 }}>
						<div id='mercury-surface-color-1' className='surface-color-gray' />
						<div id='mercury-surface-color-2' className='surface-color-white' />
					</div>
				)}

				<div className='hazey-border mercury-border'>
					<div className='hazey-border-inset mercury-border-inset'>
						<div className='shadow' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Mercury;
