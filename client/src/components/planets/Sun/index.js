import './style.css';

function Sun() {
	return (
		<div id='sun' className='planet'>
			<div className='surface'>
				<div id='sun-surface-color-1' className='surface-color-orange' />
				<div id='sun-surface-color-2' className='surface-color-gray' />
				<div id='sun-surface-color-3' className='surface-color-gold' />
				<div id='sun-surface-color-4' className='surface-color-yellow' />
			</div>

			<div className='hazey-border sun-border'>
				<div className='hazey-border-inset sun-border-inset' />
			</div>
		</div>
	);
}

export default Sun;
