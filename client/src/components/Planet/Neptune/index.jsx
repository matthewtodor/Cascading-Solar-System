import './style.css';

function Neptune({ scale }) {
	return (
		<div className='planet-scale' style={{ transform: `scale(${scale / 100})` }}>
			<div id='neptune' className='planet'>
				<div className='surface' style={{ opacity: scale / 200 }}>
					<div id='neptune-surface-color-1' className='surface-color-sky' />
					<div id='neptune-surface-color-2' className='surface-color-navy' />
					<div id='neptune-surface-color-3' className='surface-color-blue' />
				</div>

				<div className='hazey-border neptune-border'>
					<div className='hazey-border-inset neptune-border-inset'>
						<div className='shadow' />
					</div>
				</div>

				{scale >= 5 && (
					<>
						<div id='neptune-moon-1-orbit'>
							<div id='neptune-moon-1'>
								{scale >= 50 && (
									<div className='surface'>
										<div id='neptune-moon-1-surface-color-1' className='surface-color-gray' />
										<div id='neptune-moon-1-surface-color-2' className='surface-color-gray' />
									</div>
								)}

								<div className='hazey-border-inset neptune-moon-border-inset'>
									<div className='shadow' />
								</div>
							</div>
						</div>

						<div id='neptune-moon-2-orbit'>
							<div id='neptune-moon-2'>
								{scale >= 50 && (
									<div className='surface'>
										<div id='neptune-moon-2-surface-color-1' className='surface-color-gray' />
										<div id='neptune-moon-2-surface-color-2' className='surface-color-gray' />
									</div>
								)}

								<div className='hazey-border-inset neptune-moon-border-inset'>
									<div className='shadow' />
								</div>
							</div>
						</div>

						<div id='neptune-moon-3-orbit'>
							<div id='neptune-moon-3'>
								{scale >= 50 && (
									<div className='surface'>
										<div id='neptune-moon-3-surface-color-1' className='surface-color-gray' />
										<div id='neptune-moon-3-surface-color-2' className='surface-color-gray' />
									</div>
								)}

								<div className='hazey-border-inset neptune-moon-border-inset'>
									<div className='shadow' />
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Neptune;
