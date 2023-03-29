import './style.css';

function Earth({ scale }) {
	return (
		<div className='planet-scale' style={{ transform: `scale(${scale / 100})` }}>
			<div id='earth' className='planet'>
				{scale >= 5 && (
					<div className='surface' style={{ opacity: scale / 200 }}>
						<div id='earth-surface-color-1' className='surface-color-green' />
						<div id='earth-surface-color-2' className='surface-color-green' />
						<div id='earth-surface-color-3' className='surface-color-white' />
						<div id='earth-surface-color-4' className='surface-color-white' />
					</div>
				)}

				<div className='hazey-border earth-border'>
					<div className='hazey-border-inset earth-border-inset'>
						<div className='shadow' />
					</div>
				</div>

				<div id='earth-moon-orbit'>
					<div id='earth-moon'>
						{scale >= 20 && (
							<div className='surface'>
								<div id='earth-moon-surface-color-1' className='surface-color-gray' />
								<div id='earth-moon-surface-color-2' className='surface-color-gray' />
							</div>
						)}

						<div className='hazey-border-inset earth-moon-border-inset'>
							<div className='shadow' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Earth;
