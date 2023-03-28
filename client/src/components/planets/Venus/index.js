import './style.css';

function Venus() {
	return (
		<div id='venus' className='planet'>
			<div className='surface'>
				<div id='venus-surface-color-1' className='surface-color-gray' />
				<div id='venus-surface-color-2' className='surface-color-white' />
				<div id='venus-surface-color-3' className='surface-color-white' />
				<div id='venus-surface-color-4' className='surface-color-white' />
			</div>

			<div className='hazey-border venus-border'>
				<div className='hazey-border-inset venus-border-inset'>
					<div className='shadow'></div>
				</div>
			</div>
		</div>
	);
}

export default Venus;
