import './style.css';

function Jupiter() {
	return (
		<div id='jupiter' className='planet'>
			<div className='surface'>
				<div id='jupiter-surface-color-1' className='surface-color-pink' />
				<div id='jupiter-surface-color-2' className='surface-color-gray' />
				<div id='jupiter-surface-color-3' className='surface-color-white' />
			</div>

			<div className='hazey-border jupiter-border'>
				<div className='hazey-border-inset jupiter-border-inset'>
					<div className='shadow' />
				</div>
			</div>

			<div id='jupiter-moon-1-orbit'>
				<div id='jupiter-moon-1'>
					<div className='surface'>
						<div id='jupiter-moon-1-surface-color-1' className='surface-color-gray' />
						<div id='jupiter-moon-1-surface-color-2' className='surface-color-gray' />
					</div>

					<div className='hazey-border-inset jupiter-moon-border-inset'>
						<div className='shadow' />
					</div>
				</div>
			</div>

			<div id='jupiter-moon-2-orbit'>
				<div id='jupiter-moon-2'>
					<div className='surface'>
						<div id='jupiter-moon-2-surface-color-1' className='surface-color-gray' />
						<div id='jupiter-moon-2-surface-color-2' className='surface-color-gray' />
					</div>

					<div className='hazey-border-inset jupiter-moon-border-inset'>
						<div className='shadow' />
					</div>
				</div>
			</div>

			<div id='jupiter-moon-3-orbit'>
				<div id='jupiter-moon-3'>
					<div className='surface'>
						<div id='jupiter-moon-3-surface-color-1' className='surface-color-white' />
						<div id='jupiter-moon-3-surface-color-2' className='surface-color-gold' />
					</div>

					<div className='hazey-border-inset jupiter-moon-border-inset'>
						<div className='shadow' />
					</div>
				</div>
			</div>

			<div id='jupiter-moon-4-orbit'>
				<div id='jupiter-moon-4'>
					<div className='surface'>
						<div id='jupiter-moon-4-surface-color-1' className='surface-color-pink' />
						<div id='jupiter-moon-4-surface-color-2' className='surface-color-green' />
					</div>

					<div className='hazey-border-inset jupiter-moon-border-inset'>
						<div className='shadow' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Jupiter;
