import './style.css';

function Saturn({ scale }) {
	return (
		<div className='planet-scale' style={{ transform: `scale(${scale / 100})` }}>
			<div id='saturn' className='planet'>
				<div id='saturn-surface' className='surface'>
					<div id='saturn-surface-color-1' />
				</div>

				<div className='hazey-border saturn-border'>
					<div className='hazey-border-inset saturn-border-inset'>
						<div className='shadow' />
					</div>
				</div>

				<div id='saturn-rings-back-rotator'>
					<div id='saturn-rings-back'>
						<div id='saturn-rings-back-top' />
						<div id='saturn-rings-back-bottom' />
					</div>
				</div>

				<div id='saturn-rings-front-rotator'>
					<div id='saturn-rings-front'>
						<div id='saturn-rings-front-top' />
						<div id='saturn-rings-front-bottom' />
					</div>
				</div>

				<div id='saturn-moon-1-orbit'>
					<div id='saturn-moon-1'>
						{scale >= 50 && (
							<div className='surface'>
								<div id='saturn-moon-1-surface-color-1' className='surface-color-gray' />
								<div id='saturn-moon-1-surface-color-2' className='surface-color-gray' />
							</div>
						)}

						<div className='hazey-border-inset saturn-moon-border-inset'>
							<div className='shadow' />
						</div>
					</div>
				</div>

				<div id='saturn-moon-2-orbit'>
					<div id='saturn-moon-2'>
						{scale >= 50 && (
							<div className='surface'>
								<div id='saturn-moon-2-surface-color-1' className='surface-color-gray' />
								<div id='saturn-moon-2-surface-color-2' className='surface-color-gray' />
							</div>
						)}

						<div className='hazey-border-inset saturn-moon-border-inset'>
							<div className='shadow' />
						</div>
					</div>
				</div>

				<div id='saturn-moon-3-orbit'>
					<div id='saturn-moon-3'>
						{scale >= 50 && (
							<div className='surface'>
								<div id='saturn-moon-3-surface-color-1' className='surface-color-gray' />
								<div id='saturn-moon-3-surface-color-2' className='surface-color-gray' />
							</div>
						)}

						<div className='hazey-border-inset saturn-moon-border-inset'>
							<div className='shadow' />
						</div>
					</div>
				</div>

				<div id='saturn-moon-4-orbit'>
					<div id='saturn-moon-4'>
						{scale >= 50 && (
							<div className='surface'>
								<div id='saturn-moon-4-surface-color-1' className='surface-color-gray' />
								<div id='saturn-moon-4-surface-color-2' className='surface-color-gray' />
							</div>
						)}

						<div className='hazey-border-inset saturn-moon-border-inset'>
							<div className='shadow' />
						</div>
					</div>
				</div>

				<div id='saturn-moon-5-orbit'>
					<div id='saturn-moon-5'>
						{scale >= 50 && (
							<div className='surface'>
								<div id='saturn-moon-5-surface-color-1' className='surface-color-gray' />
								<div id='saturn-moon-5-surface-color-2' className='surface-color-gray' />
							</div>
						)}

						<div className='hazey-border-inset saturn-moon-border-inset'>
							<div className='shadow' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Saturn;
