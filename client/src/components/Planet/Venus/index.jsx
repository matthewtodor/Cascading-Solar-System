import './style.css';

function Venus({ scale }) {
	return (
		<div className='planet-scale' style={{ transform: `scale(${scale / 100})` }}>
			<div id='venus' className='planet'>
				{scale >= 10 && (
					<div className='surface' style={{ opacity: scale / 200 }}>
						<div id='venus-surface-color-1' className='surface-color-gray' />
						<div id='venus-surface-color-2' className='surface-color-yellow' />
						<div id='venus-surface-color-3' className='surface-color-white' />
					</div>
				)}

				<div className='hazey-border venus-border'>
					<div className='hazey-border-inset venus-border-inset'>
						<div className='shadow' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Venus;
