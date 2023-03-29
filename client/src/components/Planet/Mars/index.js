import './style.css';

function Mars({ scale }) {
	return (
		<div className='planet-scale' style={{ transform: `scale(${scale / 100})` }}>
			<div id='mars' className='planet'>
				{scale >= 10 && (
					<div className='surface' style={{ opacity: scale / 200 }}>
						<div id='mars-surface-color-1' className='surface-color-orange' />
						<div id='mars-surface-color-2' className='surface-color-sand' />
					</div>
				)}

				<div className='hazey-border mars-border'>
					<div className='hazey-border-inset mars-border-inset'>
						<div className='shadow' />
					</div>
				</div>

				<div id='mars-moon-1-orbit'>
					<div id='mars-moon-1'>
						{scale >= 100 && (
							<div className='surface'>
								<div id='mars-moon-1-surface-color-1' className='surface-color-gray' />
								<div id='mars-moon-1-surface-color-2' className='surface-color-gray' />
							</div>
						)}

						<div className='hazey-border-inset mars-moon-border-inset'>
							<div className='shadow' />
						</div>
					</div>
				</div>

				<div id='mars-moon-2-orbit'>
					<div id='mars-moon-2'>
						{scale >= 100 && (
							<div className='surface'>
								<div id='mars-moon-2-surface-color-1' className='surface-color-gray' />
								<div id='mars-moon-2-surface-color-2' className='surface-color-gray' />
							</div>
						)}

						<div className='hazey-border-inset mars-moon-border-inset'>
							<div className='shadow' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Mars;
