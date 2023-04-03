import './style.css';

function Sun({ scale }) {
	return (
		<div className='planet-scale' style={{ transform: `scale(${scale / 100})` }}>
			<div id='sun' className='planet'>
				{scale > 15 && (
					<div className='surface' style={{ opacity: scale / 200 }}>
						<div id='sun-surface-color-1' className='surface-color-orange' />
						<div id='sun-surface-color-2' className='surface-color-gray' />
						<div id='sun-surface-color-3' className='surface-color-gold' />
						<div id='sun-surface-color-4' className='surface-color-yellow' />
					</div>
				)}

				<div className='hazey-border sun-border'>
					<div className='hazey-border-inset sun-border-inset' />
				</div>
			</div>
		</div>
	);
}

export default Sun;
