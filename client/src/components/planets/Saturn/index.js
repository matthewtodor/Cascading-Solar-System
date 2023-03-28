import './style.css';

function Saturn() {
	return (
		<div id='saturn' className='planet'>
			<div className='hazey-border saturn-border'>
				<div className='hazey-border-inset saturn-border-inset'>
					<div className='shadow'></div>
				</div>
			</div>

			<div id='saturn-rings-back'>
				<div id='saturn-rings-back-top' />
				<div id='saturn-rings-back-bottom' />
			</div>

			<div id='saturn-rings-front'>
				<div id='saturn-rings-front-top' />
				<div id='saturn-rings-front-bottom' />
			</div>

			<div id='saturn-moon-1-orbit'>
				<div id='saturn-moon-1'>
					<div className='surface'>
						<div id='saturn-moon-1-surface-color-1' className='surface-color-gray'></div>
						<div id='saturn-moon-1-surface-color-2' className='surface-color-gray'></div>
					</div>

					<div className='hazey-border-inset saturn-moon-border-inset'>
						<div className='shadow'></div>
					</div>
				</div>
			</div>

			<div id='saturn-moon-2-orbit'>
				<div id='saturn-moon-2'>
					<div className='surface'>
						<div id='saturn-moon-2-surface-color-1' className='surface-color-gray'></div>
						<div id='saturn-moon-2-surface-color-2' className='surface-color-gray'></div>
					</div>

					<div className='hazey-border-inset saturn-moon-border-inset'>
						<div className='shadow'></div>
					</div>
				</div>
			</div>

			<div id='saturn-moon-3-orbit'>
				<div id='saturn-moon-3'>
					<div className='surface'>
						<div id='saturn-moon-3-surface-color-1' className='surface-color-gray'></div>
						<div id='saturn-moon-3-surface-color-2' className='surface-color-gray'></div>
					</div>

					<div className='hazey-border-inset saturn-moon-border-inset'>
						<div className='shadow'></div>
					</div>
				</div>
			</div>

			<div id='saturn-moon-4-orbit'>
				<div id='saturn-moon-4'>
					<div className='surface'>
						<div id='saturn-moon-4-surface-color-1' className='surface-color-gray'></div>
						<div id='saturn-moon-4-surface-color-2' className='surface-color-gray'></div>
					</div>

					<div className='hazey-border-inset saturn-moon-border-inset'>
						<div className='shadow'></div>
					</div>
				</div>
			</div>

			<div id='saturn-moon-5-orbit'>
				<div id='saturn-moon-5'>
					<div className='surface'>
						<div id='saturn-moon-5-surface-color-1' className='surface-color-gray'></div>
						<div id='saturn-moon-5-surface-color-2' className='surface-color-gray'></div>
					</div>

					<div className='hazey-border-inset saturn-moon-border-inset'>
						<div className='shadow'></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Saturn;
