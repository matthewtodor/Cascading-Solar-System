import './style.css';

function Uranus({ scale }) {
	return (
		<div className='planet-scale' style={{ transform: `scale(${scale / 100})` }}>
			<div id='uranus' className='planet'>
				{scale >= 10 && (
					<div className='surface' style={{ opacity: scale / 200 }}>
						<div id='uranus-surface-color-1' className='surface-color-white' />
						<div id='uranus-surface-color-2' className='surface-color-sky' />
						<div id='uranus-surface-color-3' className='surface-color-white' />
					</div>
				)}

				<div className='hazey-border uranus-border'>
					<div className='hazey-border-inset uranus-border-inset'>
						<div className='shadow' />
					</div>
				</div>

				<div id='uranus-moon-1-orbit'>
					<div id='uranus-moon-1'>
						{scale >= 100 && (
							<div className='surface'>
								<div id='uranus-moon-1-surface-color-1' className='surface-color-gray' />
								<div id='uranus-moon-1-surface-color-2' className='surface-color-gray' />
							</div>
						)}

						<div className='hazey-border-inset uranus-moon-border-inset'>
							<div className='shadow' />
						</div>
					</div>
				</div>

				<div id='uranus-moon-2-orbit'>
					<div id='uranus-moon-2'>
						{scale >= 100 && (
							<div className='surface'>
								<div id='uranus-moon-2-surface-color-1' className='surface-color-gray' />
								<div id='uranus-moon-2-surface-color-2' className='surface-color-gray' />
							</div>
						)}

						<div className='hazey-border-inset uranus-moon-border-inset'>
							<div className='shadow' />
						</div>
					</div>
				</div>

				<div id='uranus-moon-3-orbit'>
					<div id='uranus-moon-3'>
						{scale >= 100 && (
							<div className='surface'>
								<div id='uranus-moon-3-surface-color-1' className='surface-color-gray' />
								<div id='uranus-moon-3-surface-color-2' className='surface-color-gray' />
							</div>
						)}

						<div className='hazey-border-inset uranus-moon-border-inset'>
							<div className='shadow' />
						</div>
					</div>
				</div>

				<div id='uranus-moon-4-orbit'>
					<div id='uranus-moon-4'>
						{scale >= 100 && (
							<div className='surface'>
								<div id='uranus-moon-4-surface-color-1' className='surface-color-gray' />
								<div id='uranus-moon-4-surface-color-2' className='surface-color-gray' />
							</div>
						)}

						<div className='hazey-border-inset uranus-moon-border-inset'>
							<div className='shadow' />
						</div>
					</div>
				</div>

				<div id='uranus-moon-5-orbit'>
					<div id='uranus-moon-5'>
						{scale >= 100 && (
							<div className='surface'>
								<div id='uranus-moon-5-surface-color-1' className='surface-color-gray' />
								<div id='uranus-moon-5-surface-color-2' className='surface-color-gray' />
							</div>
						)}

						<div className='hazey-border-inset uranus-moon-border-inset'>
							<div className='shadow' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Uranus;
