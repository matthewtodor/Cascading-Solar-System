import Clouds from '../Clouds';
import './style.css';

function Earth() {
	return (
		<div id='earth' className='planet'>
			<div className='surface'>
				<div id='west' className='continent'></div>
				<div id='east' className='continent'></div>
				{/* <div id='asia' className='continent'></div> */}
			</div>

			<div className='hazey-border earth-border'>
				<div className='hazey-border-inset earth-border-inset'>
					<div className='shadow'></div>
				</div>
			</div>

			<div className='orbit'>
				<div className='moon'>
					<div className='hazey-border moon-border'>
						<div className='hazey-border-inset moon-border-inset'>
							<div className='shadow'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Earth;
