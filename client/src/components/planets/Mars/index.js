import './style.css';

function Mars() {
	return (
		<div id='mars' className='planet'>
			<div className='surface'>
				<div id='mars-surface-color-1' className='surface-color-red'></div>
				<div id='mars-surface-color-2' className='surface-color-gray'></div>
				<div id='mars-surface-color-3' className='surface-color-orange'></div>
				<div id='mars-surface-color-4' className='surface-color-gold'></div>
			</div>

			<div className='hazey-border mars-border'>
				<div className='hazey-border-inset mars-border-inset'>
					<div className='shadow'></div>
				</div>
			</div>

			<div id='mars-moon-1-orbit'>
				<div id='mars-moon-1'>
					<div className='surface'>
						<div id='mars-moon-1-surface-color-1' className='surface-color-gray'></div>
						<div id='mars-moon-1-surface-color-2' className='surface-color-gray'></div>
					</div>

					<div className='hazey-border-inset mars-moon-border-inset'>
						<div className='shadow'></div>
					</div>
				</div>
			</div>

			<div id='mars-moon-2-orbit'>
				<div id='mars-moon-2'>
					<div className='surface'>
						<div id='mars-moon-2-surface-color-1' className='surface-color-gray'></div>
						<div id='mars-moon-2-surface-color-2' className='surface-color-gray'></div>
					</div>

					<div className='hazey-border-inset mars-moon-border-inset'>
						<div className='shadow'></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Mars;
